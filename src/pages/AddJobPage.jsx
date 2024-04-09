/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = e => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);

    toast.success("Job Posted Successfully!");

    return navigate("/jobs");
  };

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job Details</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                Job Type
              </label>
              <select id="type" name="type" className="border rounded w-full py-2 px-3" required value={type} onChange={e => setType(e.target.value)}>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Job Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="MEAN stack developer"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add details about the job like responsibilities, expectations etc."
                value={description}
                onChange={e => setDescription(e.target.value)}></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                Salary Range
              </label>
              <select id="salary" name="salary" className="border rounded w-full py-2 px-3" required value={salary} onChange={e => setSalary(e.target.value)}>
                <option value="Under 5LPA">Under 5 LPA</option>
                <option value="5LPA - 6LPA">5 LPA - 6 LPA</option>
                <option value="6LPA - 7LPA">6 LPA - 7 LPA</option>
                <option value="7LPA - 8LPA">7 LPA - 8 LPA</option>
                <option value="8LPA - 9LPA">8 LPA - 9 LPA</option>
                <option value="9LPA - 10LPA">9 LPA - 10 LPA</option>
                <option value="10LPA - 12.5LPA">10 LPA - 12.5 LPA</option>
                <option value="12.5LPA - 15LPA">12.5 LPA - 15 LPA</option>
                <option value="15LPA - 17.5LPA">15 LPA - 17.5 LPA</option>
                <option value="17.5LPA - 20LPA">17.5 LPA - 20 LPA</option>
                <option value="Over 20LPA">Over 20 LPA</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Job Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </div>

            <h1 className="text-3xl font-bold mb-5">Company Info</h1>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company_description" className="block text-gray-700 font-bold mb-2">
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={e => setCompanyDescription(e.target.value)}></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={e => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact_phone" className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={e => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-50 focus:outline-none focus:shadow-outline" type="submit">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddJobPage;
