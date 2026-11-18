import React, { useEffect, useState } from "react";
import { galleryAPI, apiAssetUrl } from "../api";

const GalleryList = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    galleryAPI.getAll()
      .then(res => setGallery(Array.isArray(res.data) ? res.data : []));
  }, []);

  return (
    <div>
      {gallery.map((g) => (
        <img
          key={g._id}
          src={apiAssetUrl(`/uploads/${g.image}`)}
          alt=""
          width="150"
        />
      ))}
    </div>
  );
};

export default GalleryList;
