

export default function Section({title, children, ...props}){
  return(
    // ...props groups all the other attributes so that we dont have to add things like id manually.
    <section  {...props}>  
        <h2>{title}</h2>
        {children}
    </section>
  )
}