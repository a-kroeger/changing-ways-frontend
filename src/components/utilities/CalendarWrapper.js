import React from 'react'
import Calendar from '@toast-ui/react-calendar'
  
  class CalendarWrapper extends React.Component {
    calendarRef = React.createRef();

    state = {
      schedule: [],
      year: null,
      monthView: '',
      monthNames: [ "January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December" ]
      }

    componentDidUpdate(prevProps) {
      this.props.events.forEach(events => {
        events.calendarId = events.id
        events.category = 'time'
        events.title = events.attributes.Title
        events.body = events.attributes.Body
        events.start = events.attributes.Start
        events.end = events.attributes.End
      })
      if (this.props.events !== prevProps.events) {
        this.setState({ schedule: this.props.events })
        // Initialize Date For Calendar Header
        const date = new Date()
        this.setState({ monthView: date.getMonth() })
        this.setState({ year: date.getYear() })
      }
    }

    handleClickNextButton = () => {
      const calendarInstance = this.calendarRef.current.getInstance();
      this.setState({ monthView: this.state.monthView + 1 })
      if (this.state.monthView === 11){
        this.setState({ monthView: this.state.monthView - 11 })
        this.setState({ year: this.state.year + 1 })
      }
      calendarInstance.next();
    };
    
    handleClickPrevButton = () => {
      const calendarInstance = this.calendarRef.current.getInstance();
      this.setState({ monthView: this.state.monthView - 1 })
      if (this.state.monthView <= 0){
        this.setState({ monthView: this.state.monthView + 11 })
        this.setState({ year: this.state.year - 1 })
      }
      calendarInstance.prev();
    };
  
    render() {

      return (
        <>
          <h3>{this.state.monthNames[this.state.monthView]} {this.state.year+1900}</h3>
          <div className="calendar_buttons">
            <button className="calendar_control" onClick={this.handleClickPrevButton}>Previous</button>
            <button className="calendar_control" onClick={this.handleClickNextButton}>Next</button>
          </div>
          <Calendar
            ref={this.calendarRef}
            view='month'
            isReadOnly={true}
            useDetailPopup={true}
            schedules={this.state.schedule}
          />
        </>
      );
    }
  }

export default CalendarWrapper