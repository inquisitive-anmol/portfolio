import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Section from '../common/Section';
import Card from '../common/Card';
import AnimatedButton from '../../ui/AnimatedButton';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    //   const { contact } = useServices();
    const CONTACT_EMAIL = "anmolof10gms@gmail.com";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        // setIsSubmitting(true);
        // setSubmitError(null);

        // try {
        //     await contact.sendMessage(data);
        //     setSubmitSuccess(true);
        //     reset();
        // } catch (error) {
        //     setSubmitError(error instanceof Error ? error.message : 'Failed to send message');
        // } finally {
        //     setIsSubmitting(false);
        // }
        alert("message sent successfully!");
    };

    return (
        <>
            <Section
                title="Get in Touch"
                subtitle="Have a question or want to work together? Drop me a message!"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {submitSuccess && (
                                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md mb-6">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitError && (
                                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md mb-6">
                                    {submitError}
                                </div>
                            )}

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                    {...register('message', { required: 'Message is required' })}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                                )}
                            </div>

                            {/* <Button
                                type="submit"
                                fullWidth
                                isLoading={isSubmitting}
                                rightIcon={<Send className="w-4 h-4" />}
                            >
                                Send Message
                            </Button> */}
                            <div className='w-full flex justify-center itemc-center py-6'>
                                <AnimatedButton
                                    index={0}
                                    text="Send Message"
                                    svgTrue={true}
                                    className="gap-0.5 px-5 sm:px-6 xl:px-8 py-2.5 sm:py-3 xl:py-4 text-base sm:text-lg xl:text-2xl font-semibold 
                                                rounded-full  border border-[#E0E0E0]"
                                    divClassName=""
                                    spanClassName="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
                                    handleOnClick={() => alert("hello dude!")}
                                />

                            </div>
                        </form>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Mail className="w-5 h-5 text-cyan-500 dark:cyan-teal-400 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                        <a
                                            href={`mailto:${CONTACT_EMAIL}`}
                                            className="text-gray-200 hover:text-cyan-500  hover:dark:text-cyan-400"
                                        >
                                            {CONTACT_EMAIL}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="w-5 h-5 text-cyan-500 dark:cyan-teal-400 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                                        <p className="text-gray-600 dark:text-gray-300">Available upon request</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-cyan-500 dark:cyan-teal-400 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                        <p className="text-gray-600 dark:text-gray-300">Remote / Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="bg-gradient-to-br from-teal-600 to-blue-600 text-white">
                            <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
                            <p className="mb-4">
                                I'm always interested in hearing about new projects and opportunities.
                                Whether you have a question or just want to say hi, I'll try my best
                                to get back to you!
                            </p>
                            <p className="text-teal-100">
                                Response time: Usually within 24-48 hours
                            </p>
                        </Card>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default ContactForm;