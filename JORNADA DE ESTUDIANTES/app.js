
for (E = 1; E <= 15; E++) {

  const edadusuario = parseInt(prompt("Student " + E + " How old are you "));

  const kmusuario = parseInt(prompt("Student " + E + " km away where you live "));

  if (edadusuario < 18 && kmusuario >= 10) {
    document.write("Student " + E + " It corresponds to the day Shift, " + " with age of: " + edadusuario + ", with km of " + kmusuario + "<br><br>");
   
  } else if (edadusuario >= 18 && kmusuario >= 10) {
    document.write("Student " + E + " It corresponds to the day Mixed, " + " with age of: " + edadusuario + ", with km of " + kmusuario + "<br><br>");
   
  } else if (edadusuario >= 18 && kmusuario < 10) {
    document.write("Student " + E + " It corresponds to the night shift, " + " with age of: " + edadusuario + ",  with km of " + kmusuario + "<br><br>");
  
  }
}