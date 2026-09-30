import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Pencil, Plus, Trash2, X } from 'lucide-react';
import { meritListAPI } from '../../api';

const emptyForm = { name: '', pdf: null };

export default function MeritListAdmin() {
  const [meritLists, setMeritLists] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const loadMeritLists = async () => {
    try {
      setLoading(true);
      const { data } = await meritListAPI.getAll();
      setMeritLists(data.data || []);
      setError('');
    } catch {
      setError('Could not load merit lists. Please refresh and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMeritLists();
  }, []);

  const resetForm = () => {
    setForm(emptyForm);
    setEditing(null);
    setFileInputKey((key) => key + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setNotice('');
    if (!editing && !form.pdf) {
      setError('Select a PDF file to create a merit list.');
      return;
    }

    const payload = new FormData();
    payload.append('name', form.name.trim());
    if (form.pdf) payload.append('pdf', form.pdf);

    try {
      setSaving(true);
      if (editing) {
        await meritListAPI.update(editing._id, payload);
        setNotice('Merit list updated.');
      } else {
        await meritListAPI.create(payload);
        setNotice('Merit list added.');
      }
      resetForm();
      await loadMeritLists();
    } catch (submitError) {
      setError(submitError.response?.data?.error || 'Could not save this merit list.');
    } finally {
      setSaving(false);
    }
  };

  const startEditing = (item) => {
    setEditing(item);
    setForm({ name: item.name, pdf: null });
    setFileInputKey((key) => key + 1);
    setNotice('');
    setError('');
  };

  const deleteMeritList = async (item) => {
    if (!window.confirm(`Delete "${item.name}"? This cannot be undone.`)) return;
    setError('');
    setNotice('');
    try {
      await meritListAPI.delete(item._id);
      if (editing?._id === item._id) resetForm();
      setNotice('Merit list deleted.');
      await loadMeritLists();
    } catch (deleteError) {
      setError(deleteError.response?.data?.error || 'Could not delete this merit list.');
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
      <Link to="/admin/dashboard" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
        <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Dashboard
      </Link>
      <div className="mb-7 mt-5 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">Content management</p>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">Merit List PDFs</h1>
        </div>
        <span className="text-sm text-gray-600">{meritLists.length} {meritLists.length === 1 ? 'PDF' : 'PDFs'}</span>
      </div>

      {error && <p role="alert" className="mb-4 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>}
      {notice && <p role="status" className="mb-4 border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">{notice}</p>}

      <form onSubmit={handleSubmit} className="mb-8 border border-gray-200 bg-white p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          {editing ? <Pencil aria-hidden="true" className="h-5 w-5 text-amber-700" /> : <Plus aria-hidden="true" className="h-5 w-5 text-amber-700" />}
          <h2 className="text-lg font-semibold text-gray-900">{editing ? 'Update merit list' : 'Add merit list'}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm font-medium text-gray-700">
            Display name
            <input
              required
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="For example, 2026 LLB First Year"
              className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            PDF file {editing ? '(optional)' : ''}
            <input
              key={fileInputKey}
              type="file"
              accept="application/pdf,.pdf"
              onChange={(event) => setForm({ ...form, pdf: event.target.files?.[0] || null })}
              className="mt-1 block w-full text-sm text-gray-700 file:mr-3 file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-sm file:font-medium hover:file:bg-gray-200"
            />
            {editing && <span className="mt-1 block text-xs text-gray-500">Leave empty to keep the current PDF.</span>}
          </label>
        </div>
        {form.pdf && <p className="mt-2 text-xs text-gray-600">Selected: {form.pdf.name}</p>}
        <div className="mt-5 flex flex-wrap gap-2">
          <button disabled={saving} type="submit" className="inline-flex items-center gap-2 bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60">
            {saving ? 'Saving...' : editing ? 'Save changes' : 'Add PDF'}
          </button>
          {editing && (
            <button type="button" onClick={resetForm} className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <X aria-hidden="true" className="h-4 w-4" /> Cancel edit
            </button>
          )}
        </div>
      </form>

      <section aria-labelledby="merit-list-records">
        <h2 id="merit-list-records" className="mb-3 text-lg font-semibold text-gray-900">Published PDFs</h2>
        {loading ? <p className="py-8 text-center text-gray-600">Loading...</p> : meritLists.length === 0 ? (
          <p className="border-y border-gray-200 py-8 text-center text-sm text-gray-600">No merit list PDFs have been added.</p>
        ) : (
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {meritLists.map((item) => (
              <article key={item._id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <FileText aria-hidden="true" className="h-5 w-5 shrink-0 text-amber-700" />
                  <div className="min-w-0">
                    <h3 className="break-words font-medium text-gray-900">{item.name}</h3>
                    {item.pdfFileId ? (
                      <a href={meritListAPI.pdfUrl(item._id)} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 underline hover:text-amber-800">View current PDF</a>
                    ) : (
                      <p className="text-sm text-amber-800">Select this entry and upload its PDF again to restore viewing.</p>
                    )}
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button type="button" onClick={() => startEditing(item)} aria-label={`Edit ${item.name}`} className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <Pencil aria-hidden="true" className="h-4 w-4" /> Edit
                  </button>
                  <button type="button" onClick={() => deleteMeritList(item)} aria-label={`Delete ${item.name}`} className="inline-flex items-center gap-2 border border-red-200 px-3 py-2 text-sm text-red-700 hover:bg-red-50">
                    <Trash2 aria-hidden="true" className="h-4 w-4" /> Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}