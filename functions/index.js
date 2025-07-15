const functions = require("firebase-functions");
const admin = require("firebase-admin");

// ✅ Safe initialization using Application Default Credentials
if (!admin.apps.length) {
  admin.initializeApp(); // No params needed if using default credentials
}

// ✅ Simple function — this should still deploy fine
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Bernard with Admin SDK Default Init!");
});
