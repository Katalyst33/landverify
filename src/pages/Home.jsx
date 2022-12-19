const Home = () => {
  return <div className="">
    <div className="text-center py-40">
      <h1 className="text-5xl ">Welcome To Land Verify</h1>
      <p>Get Geo data about your Defined Land Area. </p>
    </div>



    <div>
      <div className="grid lg:grid-cols-3 gap-x-4">

        <div className="shadow-md border-2 p-4">
          <h2 className="text-lg">Provide Geo</h2>

          <p>To Accurately Verify your land and confirm if it over laps a restricted area or not, we we need your geo data. </p>

          <a className="text-green-500" href="https://geojson.io/#map=2/0/20">Geojson.io</a>

        </div>    <div className="shadow-md border-2 p-4">
          <h2 className="text-lg">Verify </h2>

          <p>Compare Against our Database Of restricted Areas</p>


        </div>
      </div>

    </div>
  </div>
};

export default Home;