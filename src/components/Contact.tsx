import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const schema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, "First name should be more than 3 characters")
    .refine((val) => /^[A-Za-z]+$/.test(val), {
      message: "Only letters allowed",
    }),
  email: z.string().nonempty("Email is required").email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});
type FormData = z.infer<typeof schema>;


const Contact=()=>{
    const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;
  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      alert("Message sent!");
      reset();
    } catch (error) {
      alert("Something went wrong, please try again." + error);
    }
    console.log(data);
    reset();
  };
    return(<>
    <section className="scroll-mt-24 mb-24" id="contact">
        <div>
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-teal-400 uppercase">Get in Touch</h2>
            <h3 className="text-white text-3xl font-bold">
              Let's work together
            </h3>
            <p className="text-gray-400 max-w-md">
              Have a project in mind or want to collaborate? Drop me a message
              and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="mx-10 border border-gray-700/20 p-8 rounded-lg bg-gray-700/10 lg:max-w-2xl mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="text-white font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    className={`w-full border border-gray-700/10 rounded-lg text-gray-400 p-2 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    type="text"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-white font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="w-full border border-gray-700/10 rounded-lg text-gray-400 p-2"
                    type="email"
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Message */}
              <div>
                <label className="text-white font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-600/10 rounded-lg text-gray-400 p-2"
                  {...register("message")}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Row 3: Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 rounded-lg p-2 flex justify-center items-center text-white font-semibold hover:bg-teal-600 transition"
                >
                  Send Message
                  <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>)
}
export default Contact;