import React, { useEffect, useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';
import { videoAPI } from '../api';

const DEFAULT_THUMBNAIL = '/assets/images/video22.jpg';

const getEmbedUrl = (rawUrl) => {
  try {
    const url = new URL(rawUrl);
    if (url.hostname.includes('youtu.be')) return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
    if (url.hostname.includes('youtube.com')) {
      const id = url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}` : rawUrl;
    }
    if (url.hostname.includes('vimeo.com')) {
      const id = url.pathname.split('/').filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : rawUrl;
    }
    if (url.hostname.includes('drive.google.com')) {
      const match = url.pathname.match(/\/file\/d\/([^/]+)/);
      return match ? `https://drive.google.com/file/d/${match[1]}/preview` : rawUrl;
    }
    return rawUrl;
  } catch {
    return rawUrl;
  }
};

const isDirectVideo = (video) =>
  video.sourceType === 'upload' || /\.(mp4|webm|ogg|mov|m4v|avi|mkv)(\?|#|$)/i.test(video.videoUrl);

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    videoAPI.getAll()
      .then(({ data }) => setVideos(data.data || []))
      .catch(() => setError('Videos could not be loaded. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Videos</h1>
          <p className="mt-2 text-gray-600">Watch college events, activities and highlights</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {loading && <p className="text-center text-gray-600">Loading videos...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && videos.length === 0 && (
          <p className="text-center text-gray-500">No videos are available yet.</p>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {videos.map((video) => (
            <article key={video._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <button className="relative block w-full aspect-video bg-gray-900 group" onClick={() => setSelected(video)} aria-label={`Play ${video.title}`}>
                <img
                  src={video.thumbnail || DEFAULT_THUMBNAIL}
                  onError={(event) => { event.currentTarget.src = DEFAULT_THUMBNAIL; }}
                  alt=""
                  className="w-full h-full object-cover opacity-90"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 text-white shadow-lg">
                    <Play className="w-7 h-7 ml-1" fill="currentColor" />
                  </span>
                </span>
              </button>
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900">{video.title}</h2>
                {video.description && <p className="mt-2 text-gray-600 line-clamp-3">{video.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </main>

      {selected && (
        <div className="fixed inset-0 z-[100] bg-black/80 p-4 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between gap-4 p-3 bg-gray-900 text-white">
              <h2 className="font-semibold truncate">{selected.title}</h2>
              <div className="flex items-center gap-3">
                <a href={selected.videoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-amber-300">
                  Open source <ExternalLink className="w-4 h-4" />
                </a>
                <button onClick={() => setSelected(null)} aria-label="Close video"><X /></button>
              </div>
            </div>
            <div className="aspect-video">
              {isDirectVideo(selected) ? (
                <video className="w-full h-full" src={selected.videoUrl} poster={selected.thumbnail || DEFAULT_THUMBNAIL} controls autoPlay />
              ) : (
                <iframe className="w-full h-full bg-white" src={getEmbedUrl(selected.videoUrl)} title={selected.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
