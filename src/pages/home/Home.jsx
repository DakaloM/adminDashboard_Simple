import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import LargeWidget from '../../components/largeWidget/LargeWidget';
import SmallWidget from '../../components/smallWidget/SmallWidget';
import { userData } from '../../dummyData';
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
       <FeaturedInfo />
       <Chart data={userData} dataKey={"Active User"} grid={true} title={"User Analytics"}/>
       <div className="homeWidgets">
         <SmallWidget />
         <LargeWidget />
       </div>
    </div>
  )
}

export default Home