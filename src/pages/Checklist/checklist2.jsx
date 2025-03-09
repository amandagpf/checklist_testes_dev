import { useEffect, useState } from 'react'
import { Title, Subtitle, Container, DivTexts, Navigation, ChecklistContainer } from './styles'
import PrimaryButton from "../../components/primaryButton/primaryButton"
import SecondaryButton from "../../components/secondaryButton/secondaryButton"
import StepperComponent from "../../components/stepper/stepper"
import CheckItem from '../../components/checkItem/checkItem'

function Checklist2() {
    const [items, setItems] = useState([
        { text: "As interações (pop-ups, animações) seguem o mesmo padrão?", textDescription: "Ex: O pop-up de confirmação sempre aparece no centro da tela.", isChecked: false },
        { text: "Os atalhos funcionam da mesma forma em todas as telas?", textDescription: "Ex: Ao segurar e arranjar um item, ele desliza para o lado de forma consistente.", isChecked: false },
        { text: "As mensagens de erro seguem um padrão claro?", textDescription: "Ex: As mensagens de erro estão sempre em vermelho e com o mesmo formato.", isChecked: false },
        { text: "Os feedbacks visuais (como mudança de cor ao passar o mouse) são consistentes?", textDescription: "Ex: O botão sempre muda de cor ao ser clicado.", isChecked: false },
        { text: "Ações de risco (como excluir itens) sempre pedem confirmação antes de prosseguir?", textDescription: "Ex: Ao tentar excluir um item, sempre aparece uma janela de confirmação.", isChecked: false },
        { text: "O estado de carregamento é consistente em todas as telas?", textDescription: "Ex: O ícone de carregamento sempre é o mesmo, como uma barra ou um círculo girando.", isChecked: false }
    ])

    const [isButtonEnabled, setIsButtonEnabled] = useState(false)

    function getChecklistProgress() {
        return [0, 1, 2, 3].map(page => {
            const savedItems = localStorage.getItem(`checklist-items-page-${page}`);
            if (savedItems) {
                const loadedItems = JSON.parse(savedItems);
                return loadedItems.every(item => item.isChecked); // Retorna true se todos os itens estiverem marcados
            }
            return false; // Se não houver dados salvos, considera como não completo
        });
    }

    // Recuperar o estado salvo do localStorage
    useEffect(() => {
        const savedItems = localStorage.getItem(`checklist-items-page-${1}`)
        if (savedItems) {
            const loadedItems = JSON.parse(savedItems)
            setItems(loadedItems)

            // Verifica se todos os checkboxes estão marcados após carregar
            const allChecked = loadedItems.every(item => item.isChecked)
            setIsButtonEnabled(allChecked)
        }
    }, [])

    // Função para verificar se todos os itens estão marcados
    const handleCheckChange = (index, checked) => {
        const updatedItems = [...items]
        updatedItems[index].isChecked = checked
        setItems(updatedItems)

        localStorage.setItem(`checklist-items-page-${1}`, JSON.stringify(updatedItems))

        // Verifica se todos os itens estão marcados
        const allChecked = updatedItems.every(item => item.isChecked)
        setIsButtonEnabled(allChecked)
    }

  return (
      <Container>
          <StepperComponent page={1} completedSteps={getChecklistProgress()} />
          <DivTexts>
              <Title>Consistência Comportamental</Title>
              <Subtitle>Garanta que a interface siga os padrões de UX para uma experiência visual coesa e alinhada.</Subtitle>
          </DivTexts>

          <ChecklistContainer>
                {items.map((item, index) => (
                    <CheckItem
                        key={index}
                        index={index}
                        text={item.text}
                        textDescription={item.textDescription}
                        isChecked={item.isChecked} // Passar o estado para o CheckItem
                        onCheckChange={handleCheckChange} // Passar a função de callback
                    />
                ))}
            </ChecklistContainer>


          <Navigation>
              <SecondaryButton caminho="/checklist/checklist1" texto="Voltar" />
              <PrimaryButton caminho="/checklist/checklist3" texto="Avançar!" disabled={!isButtonEnabled} />
          </Navigation>
      </Container>
  );
  }

export default Checklist2;
