import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
const JobListings = ({ isHome = false }) => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome? '/api/jobs?_limit=3': '/api/jobs'
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            }
            catch (error) {
                console.log('error fetching data', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchJobs();


    }, []);
    
    const [query, setQuery] = useState('');
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.location.toLowerCase().includes(query.toLowerCase()) ||
        job.type.toLowerCase().includes(query.toLowerCase())
    );
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;
    const indexOfLastJob = currentPage * jobsPerPage; // 1*6=6
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;// 6-6=0
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                <div className="p-4">
                <input
                    type="text"
                    placeholder="Search for a job"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border rounded p-2 w-full mb-4"
                />

            
            </div>

                {loading ? (<Spinner loading={loading} />) : (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {currentJobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="px-4 py-2 border rounded-l bg-indigo-500 text-white disabled:opacity-50"
                            >
                                Previous
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`px-4 py-2 border-t border-b border-r  hover:bg-indigo-500 hover:text-white ${
                                        currentPage === i + 1 ? 'bg-indigo-500 text-black' : ''
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 border rounded-r bg-indigo-500 text-white disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section >

    )
}

export default JobListings