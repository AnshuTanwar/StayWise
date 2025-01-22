const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
          type: String,
          default: "listingimage",
        },
        url: {
          type: String,
          default: "https://cdn.pixabay.com/photo/2024/01/01/23/41/trees-8482254_960_720.jpg",
          set: (v) => v === "" ? "https://cdn.pixabay.com/photo/2024/01/01/23/41/trees-8482254_960_720.jpg": v,
        },
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
        default: [],
      },
    ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({_id: {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;