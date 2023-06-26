import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text_center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> AI -Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Prompts for users to use on ChatGPT and other Chat sites, feel free to share your prompts!
        </p>

        <Feed />
    </section>
  )
}

export default Home