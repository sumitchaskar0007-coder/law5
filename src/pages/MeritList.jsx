import React, { useEffect, useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { meritListAPI } from '../api';

export default function MeritList() {
  const [meritLists, setMeritLists] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    meritListAPI.getAll()
      .then(({ data }) => {
        const items = data.data?.length
          ? data.data
          : [{ _id: 'default-merit-list', name: 'Merit List', pdfUrl: '/assets/pdf/merit.pdf' }];
        setMeritLists(items);
        setSelected(items[0] || null);
      })
      .catch(() => setError('Merit lists could not be loaded. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
      <div className="mb-7 border-b border-gray-200 pb-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">Admissions</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Merit Lists</h1>
      </div>

      {loading ? (
        <p className="py-12 text-center text-gray-600">Loading merit lists...</p>
      ) : error ? (
        <p role="alert" className="py-12 text-center text-red-700">{error}</p>
      ) : meritLists.length === 0 ? (
        <p className="py-12 text-center text-gray-600">No merit lists have been published yet.</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 overflow-hidden border border-gray-200 bg-gray-100">
            {selected?.pdfFileId && (
              <iframe
                key={selected._id}
                src={meritListAPI.pdfUrl(selected._id)}
                title={selected.name}
                className="h-[70vh] min-h-[520px] w-full bg-white"
              />
            )}
            {selected?._id === 'default-merit-list' && (
              <iframe
                src={selected.pdfUrl}
                title={selected.name}
                className="h-[70vh] min-h-[520px] w-full bg-white"
              />
            )}
            {selected && !selected.pdfFileId && selected._id !== 'default-merit-list' && (
              <div role="status" className="flex min-h-[520px] items-center justify-center bg-white p-6 text-center text-gray-700">
                This older PDF needs to be uploaded again by an administrator before it can be viewed.
              </div>
            )}
          </div>

          <aside aria-label="Available merit list PDFs">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">Available PDFs</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {meritLists.map((item) => (
                <div key={item._id} className="flex items-center gap-2 py-3">
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    aria-current={selected?._id === item._id ? 'true' : undefined}
                    className={`flex min-w-0 flex-1 items-center gap-3 text-left text-sm ${selected?._id === item._id ? 'font-semibold text-amber-800' : 'text-gray-700 hover:text-amber-800'}`}
                  >
                    <FileText aria-hidden="true" className="h-5 w-5 shrink-0" />
                    <span className="break-words">{item.name}</span>
                  </button>
                  {(item.pdfFileId || item._id === 'default-merit-list') && (
                    <a
                      href={item.pdfFileId ? meritListAPI.pdfUrl(item._id) : item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${item.name} in a new tab`}
                      className="shrink-0 p-2 text-gray-500 hover:text-amber-800"
                    >
                      <ExternalLink aria-hidden="true" className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}