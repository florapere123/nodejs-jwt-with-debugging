const db  = require('../../db');

const { Schema } = db;

const QuoteModel = new Schema(
  {
    id: { type: Number },
     content: { type: String },
    private: { type: Boolean, default: false },
  }
);

module.exports = db.model('Quote', QuoteModel);