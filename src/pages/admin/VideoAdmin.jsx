import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit2, Eye, EyeOff, Film, Link as LinkIcon, Plus, Search, Trash2, Upload, X } from 'lucide-react';
import { videoAPI } from '../../api';

const DEFAULT_THUMBNAIL = '/assets/images/video22.jpg';
const emptyForm = { title: '', description: '', sourceType: 'upload', videoLink: '', video: null, isActive: true };

const VideoAdmin = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const loadItems = async () => {
    try {
      const { data } = await videoAPI.getAllAdmin();
      setItems(data.data || []);
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.error || 'Could not load videos.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadItems(); }, []);

  const visibleItems = useMemo(() => {
    const term = search.toLowerCase();
    return items.filter((item) => `${item.title} ${item.description || ''}`.toLowerCase().includes(term));
  }, [items, search]);

  const closeForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm(emptyForm);
    setProgress(0);
  };

  const openEdit = (item) => {
    setEditing(item);
    setForm({
      title: item.title,
      description: item.description || '',
      sourceType: item.sourceType,
      videoLink: item.sourceType === 'link' ? item.videoUrl : '',
      video: null,
      isActive: item.isActive,
    });
    setShowForm(true);
  };

  const submit = async (event) => {
    event.preventDefault();
    if (form.sourceType === 'upload' && !form.video && (!editing || editing.sourceType !== 'upload')) {
      setMessage({ type: 'error', text: 'Please choose a video file.' });
      return;
    }

    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    data.append('sourceType', form.sourceType);
    data.append('isActive', form.isActive);
    if (form.sourceType === 'link') data.append('videoLink', form.videoLink);
    if (form.video) data.append('video', form.video);

    setSaving(true);
    setProgress(0);
    setMessage({ type: '', text: '' });
    const onUploadProgress = ({ loaded, total }) => {
      if (total) setProgress(Math.round((loaded * 100) / total));
    };

    try {
      if (editing) await videoAPI.update(editing._id, data, onUploadProgress);
      else await videoAPI.create(data, onUploadProgress);
      setMessage({ type: 'success', text: `Video ${editing ? 'updated' : 'added'} successfully.` });
      closeForm();
      await loadItems();
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.error || 'The video could not be saved.' });
    } finally {
      setSaving(false);
    }
  };

  const toggleStatus = async (item) => {
    const data = new FormData();
    data.append('isActive', !item.isActive);
    try {
      await videoAPI.update(item._id, data);
      await loadItems();
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.error || 'Status could not be changed.' });
    }
  };

  const remove = async (item) => {
    if (!window.confirm(`Delete “${item.title}” permanently?`)) return;
    try {
      await videoAPI.delete(item._id);
      setMessage({ type: 'success', text: 'Video deleted successfully.' });
      await loadItems();
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.error || 'Video could not be deleted.' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Video Management</h1>
            <p className="mt-1 text-gray-600">Manage uploaded videos and videos from web links</p>
            <Link to="/admin/dashboard" className="inline-block mt-2 text-indigo-600 hover:underline">← Back to Dashboard</Link>
          </div>
          <button onClick={() => { closeForm(); setShowForm(true); }} className="inline-flex justify-center items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700">
            <Plus className="w-5 h-5" /> Add Video
          </button>
        </div>

        {message.text && (
          <div className={`mb-5 p-4 rounded-lg ${message.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>{message.text}</div>
        )}

        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <label className="relative block">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search videos..." className="w-full border rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </label>
        </div>

        {loading ? <p className="text-center py-12">Loading videos...</p> : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <article key={item._id} className={`bg-white rounded-xl shadow overflow-hidden ${!item.isActive ? 'opacity-60' : ''}`}>
                <div className="relative aspect-video bg-gray-900">
                  <img src={item.thumbnail || DEFAULT_THUMBNAIL} onError={(e) => { e.currentTarget.src = DEFAULT_THUMBNAIL; }} alt="" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {item.sourceType === 'upload' ? <Upload className="w-3 h-3" /> : <LinkIcon className="w-3 h-3" />} {item.sourceType}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-lg truncate">{item.title}</h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2 min-h-10">{item.description || 'No description'}</p>
                  <div className="flex justify-end gap-2 mt-4">
                    <button onClick={() => toggleStatus(item)} title={item.isActive ? 'Hide' : 'Show'} className="p-2 rounded bg-gray-100 hover:bg-gray-200">{item.isActive ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                    <button onClick={() => openEdit(item)} title="Edit" className="p-2 rounded bg-blue-100 text-blue-700 hover:bg-blue-200"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => remove(item)} title="Delete" className="p-2 rounded bg-red-100 text-red-700 hover:bg-red-200"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && visibleItems.length === 0 && <div className="text-center py-16 text-gray-500"><Film className="w-12 h-12 mx-auto mb-3" />No videos found.</div>}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[100] bg-black/60 p-4 flex items-center justify-center overflow-y-auto">
          <form onSubmit={submit} className="bg-white w-full max-w-2xl rounded-xl shadow-2xl p-6 my-auto">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">{editing ? 'Edit Video' : 'Add Video'}</h2>
              <button type="button" onClick={closeForm}><X /></button>
            </div>

            <div className="space-y-4">
              <label className="block font-medium">Title *
                <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" />
              </label>
              <label className="block font-medium">Description
                <textarea rows="3" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" />
              </label>

              <fieldset>
                <legend className="font-medium mb-2">Video source *</legend>
                <div className="grid grid-cols-2 gap-3">
                  {['upload', 'link'].map((type) => (
                    <label key={type} className={`cursor-pointer border-2 rounded-lg p-3 flex items-center justify-center gap-2 capitalize ${form.sourceType === type ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}>
                      <input type="radio" className="sr-only" checked={form.sourceType === type} onChange={() => setForm({ ...form, sourceType: type, video: null })} />
                      {type === 'upload' ? <Upload className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />} {type}
                    </label>
                  ))}
                </div>
              </fieldset>

              {form.sourceType === 'upload' ? (
                <label className="block font-medium">Video file {editing?.sourceType === 'upload' && '(leave empty to keep current video)'}
                  <input type="file" accept="video/*,.mkv,.avi,.mov,.m4v" required={!editing || editing.sourceType !== 'upload'} onChange={(e) => setForm({ ...form, video: e.target.files[0] || null })} className="mt-1 block w-full border rounded-lg p-3" />
                  {form.video && <span className="block mt-1 text-sm text-gray-600">{form.video.name} ({(form.video.size / 1024 / 1024).toFixed(1)} MB)</span>}
                </label>
              ) : (
                <label className="block font-medium">Video link *
                  <input type="url" required placeholder="https://youtube.com/... or any public video URL" value={form.videoLink} onChange={(e) => setForm({ ...form, videoLink: e.target.value })} className="mt-1 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" />
                </label>
              )}

              <label className="flex items-center gap-2"><input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} /> Show this video publicly</label>
              <div className="rounded-lg bg-amber-50 text-amber-900 p-3 text-sm">The standard college video thumbnail is used automatically.</div>
              {saving && progress > 0 && <div><div className="flex justify-between text-sm"><span>Uploading...</span><span>{progress}%</span></div><div className="h-2 bg-gray-200 rounded"><div className="h-full bg-indigo-600 rounded" style={{ width: `${progress}%` }} /></div></div>}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button type="button" onClick={closeForm} disabled={saving} className="px-5 py-2.5 border rounded-lg">Cancel</button>
              <button type="submit" disabled={saving} className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg disabled:opacity-60">{saving ? 'Saving...' : editing ? 'Update Video' : 'Add Video'}</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default VideoAdmin;
