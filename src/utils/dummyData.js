export const jobs = [
  {
    "id": 1,
    "title": "Software Engineer",
    "company": "Tech Solutions",
    "location": "New York, NY",
    "status": "applied",
    "dateApplied": "2023-10-01",
    "notes": "Follow up in two weeks"
  },
  {
    "id": 2,
    "title": "Frontend Developer",
    "company": "Web Innovations",
    "location": "San Francisco, CA",
    "status": "interview",
    "dateApplied": "2023-10-05",
    "notes": "Interview scheduled for Oct 12"
  },
  {
    "id": 3,
    "title": "Backend Developer",
    "company": "CloudCore Systems",
    "location": "Austin, TX",
    "status": "rejected",
    "dateApplied": "2023-09-15",
    "notes": "Rejection email received on Oct 3"
  },
  {
    "id": 4,
    "title": "Full Stack Developer",
    "company": "NextGen Apps",
    "location": "Remote",
    "status": "offer",
    "dateApplied": "2023-09-20",
    "notes": "Offer received, considering options"
  },
  {
    "id": 5,
    "title": "UI/UX Designer",
    "company": "Design Hive",
    "location": "Chicago, IL",
    "status": "applied",
    "dateApplied": "2023-10-08",
    "notes": "Referred by a friend"
  },
  {
    "id": 6,
    "title": "DevOps Engineer",
    "company": "InfraEdge",
    "location": "Seattle, WA",
    "status": "interview",
    "dateApplied": "2023-10-03",
    "notes": "Interview on Oct 10 at 3 PM"
  },
  {
    "id": 7,
    "title": "QA Tester",
    "company": "Testify Labs",
    "location": "Denver, CO",
    "status": "rejected",
    "dateApplied": "2023-10-06",
    "notes": "Did not meet automation experience requirements"
  },
  {
    "id": 8,
    "title": "Mobile App Developer",
    "company": "Appify",
    "location": "Los Angeles, CA",
    "status": "applied",
    "dateApplied": "2023-10-09",
    "notes": "Waiting for response"
  },
  {
    "id": 9,
    "title": "Machine Learning Engineer",
    "company": "DataSense AI",
    "location": "Boston, MA",
    "status": "interview",
    "dateApplied": "2023-09-28",
    "notes": "Technical interview completed"
  },
  {
    "id": 10,
    "title": "Product Manager",
    "company": "Visionary Products",
    "location": "Remote",
    "status": "offer",
    "dateApplied": "2023-09-10",
    "notes": "Offer declined due to location mismatch"
  }
]

const all = jobs.length;
const applied = jobs.filter(job => job.status === "applied").length;
const interview = jobs.filter(job => job.status === "interview").length;
const offer = jobs.filter(job => job.status === "offer").length;
const rejected = jobs.filter(job => job.status === "rejected").length;

export const jobStats = {
  all,
  applied,
  interview,
  offer,
  rejected
};
