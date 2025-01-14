document.querySelector('#form-id').addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('.text-area').value = '';
    document.querySelector('#form-id').reset();
  });

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  });



function saveNote(){
    
    const textNote = document.querySelector('.text-area').value;
    const keyNote = Date.now().toString();
    localStorage.setItem(keyNote, textNote);

    createNote(keyNote, textNote);
}

const addInputCon = ()=>{
    document.querySelector('.text-area-con').style.display = 'flex';
    document.querySelector('#span-2').style.display = 'none';
    document.querySelector('.add-btn').style.display ="none";
    document.querySelector('#right-2').style.justifyContent = "center";
}
document.querySelector('.add-btn').addEventListener('click',addInputCon);

function deleteNote(keyNote){
    localStorage.removeItem(keyNote);
    document.querySelector(`#id${keyNote}`).remove();
}

function createNote(keyNote, textNote) {
  
        const span = document.createElement('span');
        span.className = 'span';
        
        const div = document.createElement('div');
        div.id = 'id' + keyNote;
        div.className = 'note';
        // div.textContent = textNote;
        span.textContent = textNote;

      
        const button = document.createElement('button');
        button.textContent = 'Zrobione';
        button.className = 'btn-note-delete';
        button.onclick = () => {
          deleteNote(keyNote);
        };
      
        div.appendChild(button);
        document.querySelector('.section').appendChild(div);
        div.appendChild(span);
      }
      
      function init() {
            Object.keys(localStorage).forEach((keyNote) => {
              const textNote = localStorage.getItem(keyNote);
              createNote(keyNote, textNote);
            });
          }
         
 init();
        

// function saveNote() {
//     const textNote = document.querySelector('.note-area').value;
//     const keyNote = Date.now().toString();
//     localStorage.setItem(keyNote, textNote);
  
//     createNote(keyNote, textNote);
//   }
  
//   function deleteNote(keyNote) {
//     localStorage.removeItem(keyNote);
//     document.querySelector(`#id${keyNote}`).remove();
//   }
  
//   function createNote(keyNote, textNote) {
//     const div = document.createElement('div');
//     div.id = 'id' + keyNote;
//     div.className = 'note';
//     div.textContent = textNote;
//     // const text = document.createTextNode(textNote);
//     // div.appendChild(text);
  
//     const button = document.createElement('button');
//     button.textContent = 'Usuń';
//     button.className = 'btn-note-delete';
//     button.onclick = () => {
//       deleteNote(keyNote);
//     };
  
//     div.appendChild(button);
//     document.querySelector('.notes').appendChild(div);
//   }
  
//  