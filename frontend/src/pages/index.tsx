import {Menubar} from '../components/main/sitewide/menubar'

export const Index = () => {
	return(
		<>
			<div className="image-containing-area">
				<h1>Joinery & Glazing Specialist</h1>
				<p>here is some subtext...</p>
				<button>Contact Us</button>
			</div>
			<Menubar/>

			<div className="main-container-index">
			<h1>Main Header</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet dui nec ante vestibulum, ut volutpat justo facilisis. Vivamus sed molestie urna, at sollicitudin ante. Integer malesuada vel est a lobortis. Nunc scelerisque, erat a aliquam iaculis, ex mi vehicula mi, vitae eleifend odio nibh et tellus. Curabitur sit amet aliquam ante. Praesent bibendum, libero accumsan pharetra varius, tellus dolor consequat mi, rutrum ullamcorper massa neque consequat maur</p>


			</div>
		</>
	)
}