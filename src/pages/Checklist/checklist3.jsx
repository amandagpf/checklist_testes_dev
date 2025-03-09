import { useEffect, useState } from 'react'
import { Title, Subtitle, Container, DivTexts, Navigation, ChecklistContainer } from './styles'
import PrimaryButton from "../../components/primaryButton/primaryButton"
import SecondaryButton from "../../components/secondaryButton/secondaryButton"
import StepperComponent from "../../components/stepper/stepper"
import CheckItem from '../../components/checkItem/checkItem'

function Checklist3() {
    const [items, setItems] = useState([
        { text: "O fluxo de navegação é lógico e intuitivo?", textDescription: "Ex: O botão \"Voltar\" leva sempre para a tela anterior, sem desvios inesperados.", isChecked: false },
        { text: "As funcionalidades importantes estão sempre acessíveis em todas as telas?", textDescription: "Ex: O botões primários estão sempre visíveis.", isChecked: false },
        { text: "O usuário consegue realizar ações com o mínimo de cliques possível?", textDescription: "Ex: O usuário consegue adicionar um item ao carrinho com um clique.", isChecked: false },
        { text: "A navegação entre as telas é consistente?", textDescription: "Ex: O menu lateral está presente em todas as telas, oferecendo as mesmas opções.", isChecked: false },
        { text: "O sistema usa breadcrumbs para indicar o caminho de navegação?", textDescription: "Ex: Na página de \"Detalhes do Produto\", os breadcrumbs mostram \"Home > Categoria > Produto\"", isChecked: false },
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
        const savedItems = localStorage.getItem(`checklist-items-page-${2}`)
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

        localStorage.setItem(`checklist-items-page-${2}`, JSON.stringify(updatedItems))

        // Verifica se todos os itens estão marcados
        const allChecked = updatedItems.every(item => item.isChecked)
        setIsButtonEnabled(allChecked)
    }

    return (
        <Container>
            <StepperComponent page={2} completedSteps={getChecklistProgress()} />
            <DivTexts>
                <Title>Fluxo e Navegação</Title>
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
                <SecondaryButton caminho="/checklist/checklist2" texto="Voltar" />
                <PrimaryButton caminho="/checklist/checklist4" texto="Avançar!" disabled={!isButtonEnabled} />
            </Navigation>
        </Container>
    );
}

export default Checklist3;
