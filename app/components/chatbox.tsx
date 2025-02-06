import React from "react";
import Form from "next/form";

const chatbox = () => {
  return (
    <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-4">
      <p className="text-sm">
        You ride to the gate, and a woman in yellow armor leans forward She has
        long, curly hair, disorderly pointing in every possible direction. This
        combination of hair and outfit doesn't work at all.
      </p>
      <p className="text-sm">
        "I havn't seen a horse for years now! I just said that it's weird to see
        such a large jackass, huh," there's stil a fair distance between you
        two, but she speaks loudly. Her voice is enthusiastic, young, and
        strong, and her accent reminds you of the hamlets spread around the
        town. "But no jackass would wear a saddle, I'd say."
      </p>
      <p className="text-sm">
        She exchanges a few words with a male guard wearing green, then turns to
        you again. "Well, this one here says there are some donkey saddles, or
        something. Say, traveler, how hard it is to ride a horse, really?"
      </p>
      <p className="text-sm">You stop just a couple of steps from the gate.</p>

      <div className="mt-4 flex flex-col gap-2">
        <Form action="/search">
          <input name="query" />
        </Form>
      </div>
    </div>
  );
};

export default chatbox;
