import { motion, AnimatePresence } from "motion/react";
import { 
  Flower2, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Info,
  ArrowRight,
  User,
  Mail,
  MessageSquare
} from "lucide-react";
import { useState, FormEvent } from "react";

const BookingHeader = ({ step }: { step: number }) => {
  return (
    <header className="text-center mb-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight font-headline"
      >
        Begin Your Journey
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-secondary text-lg max-w-xl mx-auto mb-12"
      >
        Select your preferred service and a time that resonates with your rhythm. We'll handle the rest.
      </motion.p>
      
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4 max-w-2xl mx-auto">
        <div className="flex items-center group">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-500 ${step >= 1 ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant"}`}>1</div>
          <span className={`ml-3 text-sm font-semibold hidden md:block transition-colors duration-500 ${step >= 1 ? "text-primary" : "text-secondary"}`}>Select Service</span>
        </div>
        <div className="w-12 h-px bg-outline-variant/30"></div>
        <div className="flex items-center group">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-500 ${step >= 2 ? "bg-primary text-on-primary" : "bg-primary-container text-on-primary-container"}`}>2</div>
          <span className={`ml-3 text-sm font-medium hidden md:block transition-colors duration-500 ${step >= 2 ? "text-primary" : "text-secondary"}`}>Pick Time</span>
        </div>
        <div className="w-12 h-px bg-outline-variant/30"></div>
        <div className="flex items-center group">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-500 ${step >= 3 ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant"}`}>3</div>
          <span className={`ml-3 text-sm font-medium hidden md:block transition-colors duration-500 ${step >= 3 ? "text-primary" : "text-secondary"}`}>Confirm</span>
        </div>
      </div>
    </header>
  );
};

const SelectionSummary = ({ selectedDate, selectedTime }: { selectedDate: string, selectedTime: string }) => {
  return (
    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
      <div className="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm">
        <h3 className="text-xl font-bold mb-6 text-on-surface font-headline">Your Selection</h3>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
            <img 
              alt="Wellness Session" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpk1AB2ewk9kupuFrG6xtkraFKS62p9U8o6BQUe2-PkjyJvx53NfIlRF3-Atm2-ZfDSAzyo8ZSHqzgNN7SNiSAghRzq-5SevfcvYHPJFBezi_t_D2RgULTzWed1onzgxHagSVOYdyacJ_5KtcPAfwMd1z5kaYvTq2K9rdEe3aBJhjud6A9RPYkKx19Fp3eCz-iVqHOSz0N-a8qEHZ1CplJ6W1N6IrbmoLnpZhpetbK7F7LBp7lQ_GWeJ8YnSB06MwaiAZ3FBxNgtw"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-start gap-4">
            <Flower2 className="text-primary mt-1" size={20} />
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Service</p>
              <p className="text-lg font-semibold text-on-surface leading-tight">Meditation & Sound Bath</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Calendar className="text-tertiary mt-1" size={20} />
            <div>
              <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Date & Time</p>
              <p className="text-lg font-semibold text-on-surface leading-tight">
                {selectedDate && selectedTime ? `${selectedDate} at ${selectedTime}` : "Pick a time below"}
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-outline-variant/20">
            <div className="flex justify-between items-center text-on-surface">
              <span className="font-medium">Session Total</span>
              <span className="text-2xl font-bold">$120.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-container/30 rounded-[2rem] p-8 border border-tertiary/5">
        <div className="flex gap-4 items-center">
          <Info className="text-tertiary shrink-0" size={20} />
          <p className="text-sm text-on-tertiary-container font-medium leading-relaxed">
            Need to reschedule? Our 24-hour peace-of-mind policy allows free changes.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("October 8th, 2024");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const times = [
    "09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", 
    "03:00 PM", "04:30 PM", "06:00 PM", "07:30 PM"
  ];

  const handleConfirm = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-surface-container-low rounded-[3rem] p-12 text-center border border-primary/10 shadow-xl"
        >
          <div className="w-24 h-24 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-5xl text-primary" size={48} />
          </div>
          <h2 className="text-3xl font-extrabold text-on-surface mb-4 font-headline">Your Session is Confirmed</h2>
          <p className="text-secondary text-lg mb-8">A confirmation email has been sent to your inbox. We look forward to seeing you soon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all">Add to Calendar</button>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all"
            >
              Return Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <BookingHeader step={step} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <SelectionSummary selectedDate={selectedDate} selectedTime={selectedTime} />
        
        <section className="lg:col-span-8 space-y-12">
          {/* Calendar View */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-10 shadow-sm border border-outline-variant/5"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-on-surface font-headline">Select a Date</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
                  <ChevronLeft size={24} />
                </button>
                <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                <div key={day} className="text-xs font-bold text-secondary uppercase tracking-widest py-4 font-label">{day}</div>
              ))}
              <div className="aspect-square flex items-center justify-center text-outline-variant/40">28</div>
              <div className="aspect-square flex items-center justify-center text-outline-variant/40">29</div>
              <div className="aspect-square flex items-center justify-center text-outline-variant/40">30</div>
              {[1, 2, 3, 4, 5, 6, 7].map(d => (
                <button key={d} className="aspect-square rounded-2xl hover:bg-primary-container hover:text-on-primary-container transition-all text-on-surface font-medium">{d}</button>
              ))}
              <button className="aspect-square rounded-2xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20">8</button>
              {[9, 10, 11].map(d => (
                <button key={d} className="aspect-square rounded-2xl hover:bg-primary-container hover:text-on-primary-container transition-all text-on-surface font-medium">{d}</button>
              ))}
              <div className="aspect-square flex items-center justify-center text-on-surface font-medium">...</div>
            </div>
          </motion.div>

          {/* Time Slot Picker */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container rounded-[2rem] p-8 md:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-on-surface mb-2 font-headline">Available Slots</h2>
              <p className="text-secondary font-medium">{selectedDate}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {times.map((time, idx) => (
                <button 
                  key={time}
                  onClick={() => {
                    setSelectedTime(time);
                    setStep(2);
                  }}
                  disabled={time === "06:00 PM"}
                  className={`py-4 px-6 rounded-xl font-bold transition-all text-center ${
                    selectedTime === time 
                      ? "bg-primary text-on-primary shadow-lg" 
                      : time === "06:00 PM"
                        ? "opacity-40 cursor-not-allowed bg-surface-container-lowest text-on-surface line-through"
                        : "bg-surface-container-lowest text-on-surface hover:bg-primary-container"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Details Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-10 shadow-sm border border-outline-variant/5"
          >
            <h2 className="text-2xl font-bold text-on-surface mb-8 font-headline">Personal Details</h2>
            <form className="space-y-6" onSubmit={handleConfirm}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-widest ml-1 font-label flex items-center gap-2">
                    <User size={14} /> Full Name
                  </label>
                  <input 
                    required
                    className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all outline-none" 
                    placeholder="Your name" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-widest ml-1 font-label flex items-center gap-2">
                    <Mail size={14} /> Email Address
                  </label>
                  <input 
                    required
                    className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all outline-none" 
                    placeholder="your@email.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase tracking-widest ml-1 font-label flex items-center gap-2">
                  <MessageSquare size={14} /> Notes for your practitioner
                </label>
                <textarea 
                  className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all outline-none resize-none" 
                  placeholder="Anything we should know..." 
                  rows={4}
                ></textarea>
              </div>
              <div className="pt-6">
                <button 
                  type="submit"
                  onClick={() => setStep(3)}
                  disabled={!selectedTime}
                  className="w-full bg-primary text-on-primary py-5 rounded-xl font-extrabold text-lg shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Confirm Appointment <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
