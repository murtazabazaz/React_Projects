

export default function Tabs({ children, buttons, ButtonContainer }) {
  //  const ButtonContainer = buttonsContainer;
  return (
    <>
        <ButtonContainer>
          {buttons}
        </ButtonContainer>
        {children}
    </>
  )
}

