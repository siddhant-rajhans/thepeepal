import { useMemo, useState } from 'react';
import './App.css';
import invoiceLogo from '../logo.jpg';

type LineItem = {
  id: number;
  description: string;
  quantity: number;
  rate: number;
};

type InvoiceDraft = {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  gstin: string;
  clientName: string;
  clientAddress: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  notes: string;
  paymentDetails: string;
  taxPercent: number;
  discountAmount: number;
  currency: string;
  items: LineItem[];
};

const DRAFT_KEY = 'peepal_invoice_draft_v1';

const today = new Date().toISOString().slice(0, 10);

function initialDraft(): InvoiceDraft {
  const now = new Date();
  const serial = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;

  return {
    businessName: 'The Peepal Farm Stay',
    businessAddress: 'Nashik, Maharashtra',
    businessPhone: '+91 94204 79673',
    businessEmail: 'owner@example.com',
    gstin: '',
    clientName: '',
    clientAddress: '',
    invoiceNumber: `INV-${serial}`,
    invoiceDate: today,
    dueDate: today,
    notes: 'Thank you for choosing The Peepal Farm Stay.',
    paymentDetails: 'UPI: your-upi-id@bank',
    taxPercent: 0,
    discountAmount: 0,
    currency: 'INR',
    items: [
      {
        id: Date.now(),
        description: 'Farm stay booking',
        quantity: 1,
        rate: 0,
      },
    ],
  };
}

function formatMoney(amount: number, currency: string) {
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

function App() {
  const [draft, setDraft] = useState<InvoiceDraft>(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as InvoiceDraft;
        if (parsed.items?.length) {
          return parsed;
        }
      }
    } catch {
      // Ignore malformed drafts and continue with fresh values.
    }
    return initialDraft();
  });

  const subtotal = useMemo(() => {
    return draft.items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
  }, [draft.items]);

  const taxAmount = useMemo(() => subtotal * (draft.taxPercent / 100), [subtotal, draft.taxPercent]);
  const grandTotal = useMemo(() => subtotal + taxAmount - draft.discountAmount, [subtotal, taxAmount, draft.discountAmount]);

  const updateField = <K extends keyof InvoiceDraft>(key: K, value: InvoiceDraft[K]) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  const updateItem = (id: number, key: keyof Omit<LineItem, 'id'>, value: string) => {
    setDraft((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id !== id) {
          return item;
        }
        if (key === 'description') {
          return { ...item, description: value };
        }
        const parsedValue = Number(value);
        return { ...item, [key]: Number.isNaN(parsedValue) ? 0 : parsedValue };
      }),
    }));
  };

  const addItem = () => {
    setDraft((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: Date.now() + Math.floor(Math.random() * 1000),
          description: '',
          quantity: 1,
          rate: 0,
        },
      ],
    }));
  };

  const removeItem = (id: number) => {
    setDraft((prev) => {
      if (prev.items.length === 1) {
        return prev;
      }
      return {
        ...prev,
        items: prev.items.filter((item) => item.id !== id),
      };
    });
  };

  const saveDraft = () => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    alert('Draft saved on this device.');
  };

  const resetDraft = () => {
    const fresh = initialDraft();
    setDraft(fresh);
    localStorage.removeItem(DRAFT_KEY);
  };

  const exportJson = () => {
    const data = {
      ...draft,
      subtotal,
      taxAmount,
      grandTotal,
      generatedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${draft.invoiceNumber || 'invoice'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="invoice-app">
      <header className="app-header no-print">
        <div>
          <p className="kicker">Owner Tool</p>
          <h1>Invoice Generator</h1>
          <p className="header-copy">Runs fully client-side for Cloudflare free hosting. Use Print and choose Save as PDF.</p>
        </div>
        <div className="header-actions">
          <button type="button" onClick={saveDraft}>Save Draft</button>
          <button type="button" onClick={exportJson}>Export JSON</button>
          <button type="button" onClick={() => window.print()}>Print or Save PDF</button>
          <button type="button" className="danger" onClick={resetDraft}>New Invoice</button>
        </div>
      </header>

      <main className="grid-layout">
        <section className="editor no-print">
          <div className="panel">
            <h2>Business</h2>
            <div className="form-grid">
              <label>
                Business Name
                <input value={draft.businessName} onChange={(e) => updateField('businessName', e.target.value)} />
              </label>
              <label>
                Phone
                <input value={draft.businessPhone} onChange={(e) => updateField('businessPhone', e.target.value)} />
              </label>
              <label>
                Email
                <input value={draft.businessEmail} onChange={(e) => updateField('businessEmail', e.target.value)} />
              </label>
              <label>
                GSTIN
                <input value={draft.gstin} onChange={(e) => updateField('gstin', e.target.value)} />
              </label>
              <label className="full">
                Address
                <textarea rows={3} value={draft.businessAddress} onChange={(e) => updateField('businessAddress', e.target.value)} />
              </label>
            </div>
          </div>

          <div className="panel">
            <h2>Client and Invoice</h2>
            <div className="form-grid">
              <label>
                Invoice Number
                <input value={draft.invoiceNumber} onChange={(e) => updateField('invoiceNumber', e.target.value)} />
              </label>
              <label>
                Invoice Date
                <input type="date" value={draft.invoiceDate} onChange={(e) => updateField('invoiceDate', e.target.value)} />
              </label>
              <label>
                Due Date
                <input type="date" value={draft.dueDate} onChange={(e) => updateField('dueDate', e.target.value)} />
              </label>
              <label>
                Currency
                <input value={draft.currency} onChange={(e) => updateField('currency', e.target.value.toUpperCase())} />
              </label>
              <label>
                Client Name
                <input value={draft.clientName} onChange={(e) => updateField('clientName', e.target.value)} />
              </label>
              <label className="full">
                Client Address
                <textarea rows={3} value={draft.clientAddress} onChange={(e) => updateField('clientAddress', e.target.value)} />
              </label>
            </div>
          </div>

          <div className="panel">
            <div className="panel-title-row">
              <h2>Line Items</h2>
              <button type="button" onClick={addItem}>Add Item</button>
            </div>
            <div className="items-table">
              <div className="items-head">
                <span>Description</span>
                <span>Qty</span>
                <span>Rate</span>
                <span>Total</span>
                <span></span>
              </div>
              {draft.items.map((item) => (
                <div className="items-row" key={item.id}>
                  <input
                    value={item.description}
                    placeholder="Service or product"
                    onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  />
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                  />
                  <input
                    type="number"
                    min="0"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, 'rate', e.target.value)}
                  />
                  <p>{formatMoney(item.quantity * item.rate, draft.currency)}</p>
                  <button type="button" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <h2>Totals and Notes</h2>
            <div className="form-grid">
              <label>
                Tax (%)
                <input
                  type="number"
                  min="0"
                  value={draft.taxPercent}
                  onChange={(e) => updateField('taxPercent', Number(e.target.value) || 0)}
                />
              </label>
              <label>
                Discount Amount
                <input
                  type="number"
                  min="0"
                  value={draft.discountAmount}
                  onChange={(e) => updateField('discountAmount', Number(e.target.value) || 0)}
                />
              </label>
              <label className="full">
                Payment Details
                <textarea rows={2} value={draft.paymentDetails} onChange={(e) => updateField('paymentDetails', e.target.value)} />
              </label>
              <label className="full">
                Notes
                <textarea rows={3} value={draft.notes} onChange={(e) => updateField('notes', e.target.value)} />
              </label>
            </div>
          </div>
        </section>

        <section className="preview" id="invoice-print-root">
          <div className="paper">
            <div className="preview-top">
              <div>
                <div className="invoice-brand-row">
                  <div className="invoice-logo-frame">
                    <img src={invoiceLogo} alt="The Peepal Logo" className="invoice-logo" />
                  </div>
                </div>
                <p className="kicker">Invoice From</p>
                <h2>{draft.businessName || 'Business Name'}</h2>
                <p>{draft.businessAddress}</p>
                <p>{draft.businessPhone}</p>
                <p>{draft.businessEmail}</p>
                {draft.gstin ? <p>GSTIN: {draft.gstin}</p> : null}
              </div>
              <div className="invoice-meta">
                <p><strong>Invoice:</strong> {draft.invoiceNumber}</p>
                <p><strong>Date:</strong> {draft.invoiceDate}</p>
                <p><strong>Due:</strong> {draft.dueDate}</p>
              </div>
            </div>

            <div className="bill-to">
              <p className="kicker">Bill To</p>
              <h3>{draft.clientName || 'Client Name'}</h3>
              <p>{draft.clientAddress}</p>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {draft.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.description || '-'}</td>
                    <td>{item.quantity}</td>
                    <td>{formatMoney(item.rate, draft.currency)}</td>
                    <td>{formatMoney(item.quantity * item.rate, draft.currency)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="totals">
              <p><span>Subtotal</span><strong>{formatMoney(subtotal, draft.currency)}</strong></p>
              <p><span>Tax</span><strong>{formatMoney(taxAmount, draft.currency)}</strong></p>
              <p><span>Discount</span><strong>- {formatMoney(draft.discountAmount, draft.currency)}</strong></p>
              <p className="grand-total"><span>Total</span><strong>{formatMoney(Math.max(0, grandTotal), draft.currency)}</strong></p>
            </div>

            <div className="preview-footer">
              <div>
                <p className="kicker">Payment Details</p>
                <p>{draft.paymentDetails}</p>
              </div>
              <div>
                <p className="kicker">Notes</p>
                <p>{draft.notes}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
