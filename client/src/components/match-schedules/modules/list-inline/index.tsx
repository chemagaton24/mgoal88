import Modules from '..'
import Scroller from '../../../../utils/scroller'
import Container from '../../../containers'
import "./style.css"

const ListInline = () => {
    return (
        <Container.Module name="inline-list-match-schedules">
            <Scroller direction="x">
                <ul className="flex flex-inline g-col-8">
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                    <li><Modules.Card /></li>
                </ul>
            </Scroller>
        </Container.Module>
    )
}

export default ListInline