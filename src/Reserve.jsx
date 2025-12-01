import GymClass from "./GymClass";

const Reserve = () => {
  return (
    <>
      <div className="text-center text-gray-900 py-4 border-y headline-one">
        Book a <span className="text-color-one">Session</span>
      </div>
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
    </>
  );
};

export default Reserve;
