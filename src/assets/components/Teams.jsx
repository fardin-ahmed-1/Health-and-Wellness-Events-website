import { useLoaderData } from 'react-router-dom'
import Team from './Team'
import PageBanner from './PageBanner'



const Teams = () => {

    const teamData= useLoaderData()

    
  return (
  <div>
    <PageBanner title={'Our Teams'}></PageBanner>

     <div className='container mx-auto px-6 my-10'>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          teamData.map(team=> <Team key={team.id} team={team}> </Team>)
        }
        
    </div>
   </div>
  </div>
  )
}

export default Teams