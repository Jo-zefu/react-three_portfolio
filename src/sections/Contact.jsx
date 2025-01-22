import {useRef, useState} from "react";
import emailJs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = ({target: {name, value}}) => {
        setForm((preForm) => {return {...preForm, [name]: value}})
    }
    // service_89mygfb
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            emailJs.send('service_89mygfb', 'template_rf7mnxt', {
                from_name: form.name,
                to_name: "Jiao Zeng",
                from_email: form.email,
                to_email: "jolinzefu@gmail.com",
                message: form.message,

            }, '_DxP5Q_iotE6pKk35')

            setLoading(false)
            setForm({name: '', email: '', message: '', })
            alert('Your message has been sent.')
        }catch (error) {
            setLoading(false)
            console.log(error)
            alert('Something went wrong!')
        }

    }
    return (
        <section className="c-space my-20" id={"contact"}>
            {/*<h2 className="head-text">Contact</h2>*/}
            <div className="relative min-h-[110vh] flex items-center justify-center flex-col pt-8">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-[110vh]" />
                <div className="contact-container">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to life, I&apos;m here to help.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <lable className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name="name" required value={form.name} onChange={handleChange}
                                   placeholder="John Doe" className="field-input"/>
                        </lable>
                        <lable className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name="email" required value={form.email} onChange={handleChange}
                                   placeholder="joedoe@gmail.com" className="field-input"/>
                        </lable>
                        <lable className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea rows={5} name="message" required value={form.message} onChange={handleChange}
                                   placeholder="Hi, I wanna give you a job..." className="field-input"/>
                        </lable>
                        <button type="submit" className="field-btn" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
