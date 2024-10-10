import Hero from '../Component/Hero'
import HomeCards from '../Component/HomeCards'
import JobListings from '../Component/JobListings'
import ViewAllJobs from '../Component/ViewAllJobs'
const HomePage = () => {
  return (
    <div>
        <Hero />
        <HomeCards />
        <JobListings isHome = {true} />
        <ViewAllJobs />

    </div>
  )
}

export default HomePage