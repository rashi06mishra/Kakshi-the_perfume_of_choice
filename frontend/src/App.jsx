import Nav from "./components/Nav";
import{
  Hero,
  PopularProducts,
  CustomerReviews,
  ContactUs,
  Footer
} from "./sections"

export default function App() {
  return (
    <main className="relative bg-slate-200">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <ContactUs/>
      </section>
      <section className="bg-black padding-x padding-t pb-8 text-blue-100">
        <Footer />
      </section>
    </main>
  )
}