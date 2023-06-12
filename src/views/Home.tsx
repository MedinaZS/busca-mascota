import { Link } from 'react-router-dom'
import { APP_ROUTES, SRC_FILES } from '../helper/utility'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'

const Home = () => {

	

	return (
		<>
			<Section1 />
			<Section2 />
			<Section3 />
		</>
	)
}

export default Home