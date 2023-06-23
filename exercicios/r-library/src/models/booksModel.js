const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
<<<<<<< HEAD
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },

        title: {
            type: String,
            required: true,
            unique: true,
        },

        launchYear: {
            type: Number,
            required: true,
        },

        available: {
            type: Boolean,
            required: true,
        },

        publisher: {
            type: String,
            required: true,
        },

        gender: {
            type: String,
            required: true,
        },

        writer: {
            type: String,
            required: true,
        },

        pages: Number,
    }
)

const Model = mongoose.model("Book", BookSchema);
=======
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    launchYear: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
    pages: Number,
  },
  { timestamp: true }
);

const Model = mongoose.model("Book", BookSchema);


>>>>>>> 6fb638a3547e88139e74563b9f3a780521e35322
module.exports = Model;