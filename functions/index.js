const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize admin SDK (Firebase Functions runtime provides credentials)
admin.initializeApp();

/**
 * Pub/Sub-triggered function that copies `/papers` -> `/backups/latest`
 * This will overwrite the previous backup (as requested).
 */
exports.backupPapers = functions.pubsub.topic('backup-papers-topic').onPublish(async (message) => {
  try {
    const db = admin.database();
    const snap = await db.ref('papers').once('value');
    const data = snap.exists() ? snap.val() : null;

    const backupRef = db.ref('backups/latest');
    const timestamp = new Date().toISOString();

    // Write a small wrapper object so we have metadata + data
    await backupRef.set({
      backedAt: timestamp,
      data: data
    });

    console.log(`Backup completed at ${timestamp}`);
    return { status: 'ok', backedAt: timestamp };
  } catch (err) {
    console.error('Backup failed', err);
    throw err;
  }
});
