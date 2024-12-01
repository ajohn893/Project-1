const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
            <small>Key.Entered</small>
        </div>
        <div class="key">
        ${event.keyCode}
            <small>Event.KeyCode</small>
        </div>
        <div class="key">
        ${event.code}
            <small>key.Name</small>
        </div>
      `
      //used `` so that we can store dynamic type in javascript//
})