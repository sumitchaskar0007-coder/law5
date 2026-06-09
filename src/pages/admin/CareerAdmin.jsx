import React, { useEffect, useState } from "react";
import { careerAPI } from "../../api";

const CareerAdmin = () => {

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    position: "",
    department: "",
    location: "",
    type: "",
    description: "",
    lastDate: "",
  });

  const [editingId, setEditingId] = useState(null);


  // ================= FETCH DATA =================
  const fetchCareers = async () => {
    try {
      setLoading(true);
      const res = await careerAPI.getAllAdmin();
      setCareers(res.data.data);
    } catch (error) {
      console.error("Error fetching careers", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);


  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await careerAPI.update(editingId, form);
        alert("Career updated successfully");
      } else {
        await careerAPI.create(form);
        alert("Career created successfully");
      }

      setForm({
        position: "",
        department: "",
        location: "",
        type: "",
        description: "",
        lastDate: "",
      });

      setEditingId(null);
      fetchCareers();

    } catch (error) {
      console.error(error);
      alert("Error saving career");
    }
  };


  // ================= EDIT =================
  const handleEdit = (career) => {
    setEditingId(career._id);

    setForm({
      position: career.position,
      department: career.department,
      location: career.location,
      type: career.type,
      description: career.description,
      lastDate: career.lastDate?.substring(0,10)
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  // ================= DELETE =================
  const handleDelete = async (id) => {

    if (!window.confirm("Delete this career post?")) return;

    try {
      await careerAPI.delete(id);
      fetchCareers();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* PAGE HEADER */}

      <div className="max-w-7xl mx-auto mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Career Management
        </h1>

        <p className="text-gray-500 mt-2">
          Create and manage job opportunities for your college website.
        </p>

      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">


        {/* ================= FORM SECTION ================= */}

        <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6">

          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Job" : "Add New Job"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="position"
              placeholder="Job Position"
              value={form.position}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={form.department}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              name="type"
              placeholder="Job Type (Full Time / Contract)"
              value={form.type}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="description"
              placeholder="Job Description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="date"
              name="lastDate"
              value={form.lastDate}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              {editingId ? "Update Job" : "Create Job"}
            </button>

          </form>

        </div>



        {/* ================= TABLE SECTION ================= */}

        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 overflow-x-auto">

          <h2 className="text-xl font-semibold mb-4">
            Job Listings
          </h2>

          {loading ? (

            <p className="text-gray-500">Loading careers...</p>

          ) : careers.length === 0 ? (

            <p className="text-gray-500">No career posts found.</p>

          ) : (

            <table className="w-full border-collapse">

              <thead>

                <tr className="bg-gray-100 text-left">

                  <th className="p-3">Position</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Last Date</th>
                  <th className="p-3 text-center">Actions</th>

                </tr>

              </thead>

              <tbody>

                {careers.map((career) => (

                  <tr
                    key={career._id}
                    className="border-t hover:bg-gray-50 transition"
                  >

                    <td className="p-3 font-medium">
                      {career.position}
                    </td>

                    <td className="p-3">
                      {career.department}
                    </td>

                    <td className="p-3">
                      {career.location}
                    </td>

                    <td className="p-3 text-red-500 text-sm">
                      {new Date(career.lastDate).toLocaleDateString()}
                    </td>

                    <td className="p-3 flex justify-center gap-3">

                      <button
                        onClick={() => handleEdit(career)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(career._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </div>

      </div>

    </div>
  );
};

export default CareerAdmin;