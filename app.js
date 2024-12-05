const tabs=[... document.querySelectorAll('[role=tab')];
const panels=[... document.querySelectorAll('[role=tabpanel')];


function handletab(e){
    const paneltocontrol=e.currentTarget.getAttribute('aria-controls');
    panels.forEach(p=>p.setAttribute('aria-hidden',`${p.id===paneltocontrol?'false':'true'}`))

}
tabs.forEach(tab=>{
    tab.addEventListener('click',handletab)
})