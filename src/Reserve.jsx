import CallToAction from "./CallToAction";
import GymClass from "./GymClass";

const Reserve = () => {
  return (
    <>
      <div className="text-center text-gray-900 py-4 border-y headline-one">
        Book a <span className="text-color-one">Session</span>
      </div>
      <div className="md:flex" >
        <GymClass
        name="Strength"
        schedule={["Weekdays at 6AM", "Weekends and Holidays at 8AM"]}
        description="Build a foundation of raw power with our comprehensive weightlifting and
        strength training programs."
      />
      <GymClass
        name="Conditioning"
        schedule={["Weekdays at 8AM", "Weekends and Holidays at 10AM"]}
        description="Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness. "
      />
      <GymClass
        name="COMMUNITY CLASSES"
        schedule={["Weekdays at 8AM"]}
        description="Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals."
      />
      </div>
      <CallToAction
        bgColor="bg-color-one"
        btnBgColor="bg-color-two"
        headingText="Primal Personal Training"
        paragraphBelowHeadingText="Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way."
      />
    </>
  );
};

export default Reserve;
