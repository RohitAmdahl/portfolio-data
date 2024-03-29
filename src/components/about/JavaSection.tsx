import javaPic from "../../assets/aboutPic/java.jpg";

const JavaSection = () => {
  return (
    <>
      <div className="p-4">
        <div>
          <figure>
            <img
              className="max-w-4xl container mx-auto"
              src={javaPic}
              alt="code in java language picture"
            />
            <figcaption>
              <p className="text-md text-center font-light ">
                Java coding in IntelliJ, practising object-oriented
                programming."In short:", "My basis".
              </p>
            </figcaption>
          </figure>

          <h2 className="font-bold text-xl py-4">
            "So why Java?" you might ask. Here's my answer:
          </h2>
          <p className="py-2">
            I usually attend different meetups because I like to keep myself
            updated. I went to a JavaBin meetup where I found Java quite
            interesting. Although I couldn't fully understand the code during
            the presentation, I could relate it to JavaScript classes and made
            an effort to grasp the concepts. I spoke to many experienced Java
            developers and realized the importance of naming conventions in
            Java.
          </p>
          <p>
            This led me to decide that I want to learn Java, appreciating its
            ease of understanding and robust nature, with continuous updates
            over the years. Personally, I became a fan of object-oriented
            programming through Java, as it provides a structured and efficient
            way to organize code. This not only makes Java a practical choice
            but also an enjoyable one for anyone entering the world of
            programming.
          </p>
        </div>
        <div>
          <p className="py-4">
            I also enjoy learning about Domain-Driven Design also know as in a
            short form DDD, Clean code, Agile development and Accessibility.
          </p>
        </div>
      </div>
    </>
  );
};

export default JavaSection;
