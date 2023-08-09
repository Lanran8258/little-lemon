import BookingForm from './BookingForm.js';
import './BookingPage.css';
import GeneralHeader from './GeneralHeader.js';

const BookingPage=()=>{

    return (
        <div className='bookingPage'>
            <div className='bookingHeader'>
                <GeneralHeader />
            </div>
            <div className='bookingForm'>
                <BookingForm />
            </div>
        </div>
        )
}

export default BookingPage;