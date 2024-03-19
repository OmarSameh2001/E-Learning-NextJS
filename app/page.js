import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white">
      <h1 className="p-5">Handball Buddy</h1>
      <div className="d-flex justify-content-center">
        <p className="col-md-4 mx-5">
          Welcome to Handball Buddy, your premier destination for all things
          handball. Whether youre a seasoned player looking to refine your
          skills or a newcomer eager to learn the ropes, our comprehensive
          tutorial website is here to support and guide you every step of the
          way.
        </p>
        <p className="col-md-4 mx-5">
          From mastering the fundamentals to advanced strategies, our
          user-friendly interface and instructional videos ensure that learning
          is both accessible and enjoyable. Whether youre honing your shooting
          accuracy, perfecting defensive maneuvers, or strategizing for that
          crucial match, Handball Buddy is your trusted companion on the journey
          to success.
        </p>
      </div>
    </div>
  );
}
