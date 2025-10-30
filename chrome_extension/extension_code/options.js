// Saves options to chrome.storage
const saveOptions = () => {
  const fvs = document.getElementById('fvs').value;
  

  chrome.storage.sync.set(
    { fvs: fvs },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 1000);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { fvs: 'hide' },
    (items) => {
      document.getElementById('fvs').value = items.fvs;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);