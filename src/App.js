import logo from './logo.svg';
import './App.css';
// import { DateTime } from '@eonasdan/tempus-dominus';
import { TempusDominus } from '@eonasdan/tempus-dominus';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import "./style.css"
// import "./tooltip.css"
import $ from "jquery"
import DatatableTest from './DatatableTest';


import data from './datatable/data';
import Table from './DatatableTest';
import VisNetwork from './VisNetwork';
// import VisGraphNetwork from './VisGraphNetwork';





function App() {
	const datetime = useRef()

	const [dateRange, setDateRange] = useState([])
	// const [ctrlDown, setCtrlDown] = useState(false)
	// const [shiftDown, setShiftDown] = useState(false)
	let ctrlDown = false
	let shiftDown = false

	Date.prototype.addDays = function (days) {
		var date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	}

	// useEffect(() => {
	// 	let datepicker = new TempusDominus(document.getElementById('datetimepicker1'), {
	// 		// display: {
	// 		// 	icons: {
	// 		// 		type: 'icons',
	// 		// 		time: 'fa-solid fa-clock',
	// 		// 		date: 'fa-solid fa-calendar',
	// 		// 		up: 'fa-solid fa-arrow-up',
	// 		// 		down: 'fa-solid fa-arrow-down',
	// 		// 		previous: 'fa-solid fa-chevron-left',
	// 		// 		next: 'fa-solid fa-chevron-right',
	// 		// 		today: 'fa-solid fa-calendar-check',
	// 		// 		clear: 'fa-solid fa-trash',
	// 		// 		close: 'fa-solid fa-xmark'
	// 		// 	},
	// 		// 	sideBySide: false,
	// 		// 	calendarWeeks: false,
	// 		// 	viewMode: 'calendar',
	// 		// 	toolbarPlacement: 'bottom',
	// 		// 	keepOpen: false,
	// 		// 	buttons: {
	// 		// 		today: false,
	// 		// 		clear: false,
	// 		// 		close: false
	// 		// 	},
	// 		// 	components: {
	// 		// 		calendar: true,
	// 		// 		date: true,
	// 		// 		month: true,
	// 		// 		year: true,
	// 		// 		decades: true,
	// 		// 		clock: true,
	// 		// 		hours: true,
	// 		// 		minutes: true,
	// 		// 		seconds: false,
	// 		// 		//deprecated use localization.hourCycle = 'h24' instead
	// 		// 		useTwentyfourHour: undefined
	// 		// 	},
	// 		// 	inline: true,
	// 		// 	// theme: 'auto'
	// 		// }
	// 		display: {
	// 			icons: {
	// 				type: 'icons',
	// 				time: 'fa-solid fa-clock',
	// 				date: 'fa-solid fa-calendar',
	// 				up: 'fa-solid fa-arrow-up',
	// 				down: 'fa-solid fa-arrow-down',
	// 				previous: 'fa-solid fa-chevron-left',
	// 				next: 'fa-solid fa-chevron-right',
	// 				// today: 'fa-solid fa-calendar-check',
	// 				clear: 'fa-solid fa-trash',
	// 				close: 'fa-solid fa-xmark'
	// 			},
	// 			inline: true,
	// 			theme: "light",


	// 		},
	// 		restrictions: {
	// 			minDate: new Date("01/01/2023"),
	// 			maxDate: new Date(),
	// 			disabledDates: [],
	// 			enabledDates: [],
	// 			daysOfWeekDisabled: [],
	// 			disabledTimeIntervals: [],
	// 			disabledHours: [],
	// 			enabledHours: []
	// 		},
	// 		localization: {
	// 			today: 'Go to today',
	// 			clear: 'Clear selection',
	// 			close: 'Close the picker',
	// 			selectMonth: 'Select Month',
	// 			previousMonth: 'Previous Month',
	// 			nextMonth: 'Next Month',
	// 			selectYear: 'Select Year',
	// 			previousYear: 'Previous Year',
	// 			nextYear: 'Next Year',
	// 			selectDecade: 'Select Decade',
	// 			previousDecade: 'Previous Decade',
	// 			nextDecade: 'Next Decade',
	// 			previousCentury: 'Previous Century',
	// 			nextCentury: 'Next Century',
	// 			pickHour: 'Pick Hour',
	// 			incrementHour: 'Increment Hour',
	// 			decrementHour: 'Decrement Hour',
	// 			pickMinute: 'Pick Minute',
	// 			incrementMinute: 'Increment Minute',
	// 			decrementMinute: 'Decrement Minute',
	// 			pickSecond: 'Pick Second',
	// 			incrementSecond: 'Increment Second',
	// 			decrementSecond: 'Decrement Second',
	// 			toggleMeridiem: 'Toggle Meridiem',
	// 			selectTime: 'Select Time',
	// 			selectDate: 'Select Date',
	// 			dayViewHeaderFormat: { month: 'long', year: 'numeric' },
	// 			locale: 'default',
	// 			startOfTheWeek: 1,
	// 			hourCycle: "h24",
	// 			dateFormats: {
	// 				LTS: 'h:mm:ss T',
	// 				LT: 'h:mm T',
	// 				L: 'MM/dd/yyyy',
	// 				LL: 'MMMM d, yyyy',
	// 				LLL: 'MMMM d, yyyy h:mm T',
	// 				LLLL: 'dddd, MMMM d, yyyy h:mm T'
	// 			},
	// 			ordinal: (n) => n,
	// 			format: 'LL'
	// 		}

	// 	});

	// 	// datepicker.dates.formatInput = function(date) { {return moment(date).format('MM/DD/YYYY') } }
	// }, [])

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.shiftKey) { shiftDown = true }
			if (e.ctrlKey) { ctrlDown = true }
			console.log("KEYDown: ", e.key);
		})
		document.addEventListener("keyup", (e) => {
			ctrlDown = false
			shiftDown = false
			console.log("KEYup: ", e.key, "SHIFT: ", shiftDown, "CRTL: ", ctrlDown);
		})
	}, [])

	function transformDate(e) {
		let dateValue = e.target.attributes['data-value'].value.split("-")
		dateValue[1] = parseInt(dateValue[1]) <= 8 ? "0" + (parseInt(dateValue[1]) + 1) : parseInt(dateValue[1]) + 1
		return dateValue[0] + "-" + dateValue[1] + "-" + dateValue[2]
	}
	function transformDate1(date) {
		let dateValue = date.split("-")
		dateValue[1] = parseInt(dateValue[1]) <= 8 ? "0" + (parseInt(dateValue[1]) + 1) : parseInt(dateValue[1]) + 1
		dateValue[2] = parseInt(dateValue[2]) <= 9 ? "0" + (parseInt(dateValue[2])) : parseInt(dateValue[2])
		return dateValue[0] + "-" + dateValue[1] + "-" + dateValue[2]
	}
	const clickhandler = name => console.log("delete", name);
	let plage = []
	// function getDates(startDate, stopDate) {
	// 	var dateArray = new Array();
	// 	var currentDate = startDate;
	// 	while (currentDate <= stopDate) {
	// 		dateArray.push(new Date (currentDate));
	// 		currentDate = currentDate.addDays(1);
	// 	}
	// 	return dateArray;
	// }


	function handleDateClick(e) {
		e.preventDefault()

		let targetClass = e.target.classList

		// console.log("TARGET: ", e.target.classList)
		// document.getElementById("datetimepicker1 .day").addEventListener('click', ()=>{
		// 	alert("ezezezeeze")
		// })

		if (targetClass.contains("disabled")) {

		} else {
			if (e.target.tagName === "DIV" && e.target.classList[0] === "day") {


				// 	selectedDate = [selectedDate]
				// setDateRange([...dateRange, plage])

				// }
				// console.log("EVENT: ", e.target.attributes['data-value'].value);

				if (shiftDown) {
					let dateplage = []
					let temp = []

					let start = []

					start.push(transformDate(e))

					plage.push(transformDate(e))

					let firstDate = ""

					if (plage.length >= 2) {
						firstDate = plage[plage.length - 2]
					} else {
						firstDate = plage[0]
					}

					console.log("DATE_PLAGE: ", dateplage);

					let lastDate = plage[plage.length - 1]

					temp.push(transformDate(e))

					let date1 = new Date(firstDate)
					let date2 = new Date(lastDate)
					// const date1 = new Date('7/13/2010');
					// const date2 = new Date('12/15/2010');


					if (date1 > date2) {

						const diffTime = Math.abs(date1 - date2);
						const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
						dateplage = []
						for (let index = 0; index < diffDays + 1; index++) {
							dateplage.push(transformDate1(date2.addDays(index).getFullYear() + "-" + date2.addDays(index).getMonth() + "-" + date2.addDays(index).getDate()))
						}
						document.querySelectorAll(".day:not(.disabled)").forEach((el) => {

							let dateValue = $(el).attr("data-value").split("-")
							dateValue[1] = parseInt(dateValue[1]) <= 8 ? "0" + (parseInt(dateValue[1]) + 1) : parseInt(dateValue[1]) + 1
							let newDate = dateValue[0] + "-" + dateValue[1] + "-" + dateValue[2]
							if (dateplage.includes(newDate)) {
								$(el).addClass('set-date-range')
							}
						})
						// setDateRange([...dateRange, ...dateplage])
						plage = [...dateplage]

					} else {
						const diffTime = Math.abs(date2 - date1);
						const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
						dateplage = []

						for (let index = 0; index < diffDays + 1; index++) {
							dateplage.push(transformDate1(date1.addDays(index).getFullYear() + "-" + date1.addDays(index).getMonth() + "-" + date1.addDays(index).getDate()))

						}

						document.querySelectorAll(".day:not(.disabled)").forEach((el) => {

							let dateValue = $(el).attr("data-value").split("-")
							dateValue[1] = parseInt(dateValue[1]) <= 8 ? "0" + (parseInt(dateValue[1]) + 1) : parseInt(dateValue[1]) + 1
							let newDate = dateValue[0] + "-" + dateValue[1] + "-" + dateValue[2]
							if (dateplage.includes(newDate)) {
								$(el).addClass('set-date-range')
							}

						})
						// setDateRange([...dateRange, ...dateplage])
						plage = [...dateplage]
					}


				} else if (ctrlDown) {

					// setDateRange(plage)
					let dateplage = []

					dateplage.push(transformDate(e))

					console.log("DATE_PLAGE: ", plage, "Event: ", transformDate(e));

					let filter_date = plage.find((date) => date === transformDate(e))

					if (filter_date !== undefined) {
						plage = plage.filter((date) => date !== transformDate(e))
					} else {
						plage.push(transformDate(e))

					}

					document.querySelectorAll(".day:not(.disabled)").forEach((el) => {

						let dateValue = $(el).attr("data-value").split("-")
						dateValue[1] = parseInt(dateValue[1]) <= 8 ? "0" + (parseInt(dateValue[1]) + 1) : parseInt(dateValue[1]) + 1
						let newDate = dateValue[0] + "-" + dateValue[1] + "-" + dateValue[2]
						if (plage.includes(newDate)) {
							$(el).addClass('set-date-range')
						} else {

							$(el).removeClass('active')
						}

					})
				} else {
					let selectedDate = transformDate(e)
					plage = []
					plage.push(transformDate(e))
					document.querySelectorAll(".day:not(.disabled)").forEach((el) => {

						let dateValue = $(el).attr("data-value").split("-")
						dateValue[1] = parseInt(dateValue[1]) <= 8 ? "0" + (parseInt(dateValue[1]) + 1) : parseInt(dateValue[1]) + 1
						let newDate = dateValue[0] + "-" + dateValue[1] + "-" + dateValue[2]
						if (plage.includes(newDate)) {
							$(el).addClass('set-date-range')
						}

					})

				}





				console.log("ELEMENTS: ", plage);
			}
		}
		// e.stopPropagation()
	}

	// useEffect(() => {
	// 	$("#datetimepicker1").on("click", ".day:not(.disabled)", (e) => {
	// 		e.preventDefault()
	// 		if (shiftDown) {
	// 			let temp = []
	// 			temp.push($(e.target).attr("data-value"))
	// 			console.log("SELECTED: ", temp);
	// 			shiftDown = false
	// 		} else if (ctrlDown) {
	// 			console.log("Control");

	// 		} else {
	// 			console.log("Rien");
	// 		}
	// 		e.stopPropagation()
	// 	})
	// }, [])


	let n = 0;
	useEffect(() => {

		while (n ** 2 < 145) {

			console.log(n)
			n += 3
		}
	}, [n])
	return (
		<>
			{/* <div id='datetimepicker1' onClick={handleDateClick} style={{ userSelect: "none", marginBottom: "15px" }}>

			</div>
			{dateRange.map((date, i) => (
				<p key={i}>{date}</p>
			))} */}

			{/* <DatatableTest /> */}
			{/* <Table data={data} click={clickhandler} /> */}
			{/* <Table data={data} /> */}

			<VisNetwork />

			{/* <VisGraphNetwork /> */}
			{/* <p></p>
			{
				
				2**3
			}

			<div style={{
				width:"100px",
				height:"75px",
				backgroundColor: "red",
				border:"1px solid black",
				transform: "translate(20px, 15%)"
			}}>ggt</div> */}
		</>
	);
}

export default App;
