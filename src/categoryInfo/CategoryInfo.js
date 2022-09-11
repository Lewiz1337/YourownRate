
import './CategoryInfo.scss'


const CategoryInfo = () => {
    return(
        <div className="info">
            <div className='info__list-wrapper'>
            <div className="info__list">
                <div className="info__list-add">
                    <button>add</button>
                </div>
                <h2>My films list</h2>
                <ul>
                    <li className="info__list-item">
                        <p className="info__list-item-name">Дюна</p>
                        <p className="info__list-item-score">85</p>
                    </li>
                    <li className="info__list-item">
                        <p className="info__list-item-name">Дюна</p>
                        <p className="info__list-item-score">85</p>
                    </li>
                    <li className="info__list-item">
                        <p className="info__list-item-name">Дюна</p>
                        <p className="info__list-item-score">85</p>
                    </li>
                    <li className="info__list-item">
                        <p className="info__list-item-name">Дюна</p>
                        <p className="info__list-item-score">85</p>
                    </li>
                </ul>
            </div>
            <div className="info__selected">
                <div className="info__selected-title">
                    <p className="info__selected-title-name">Дюна</p>
                    <p className="info__selected-title-score">85</p>
                </div>
                <div className="info__selected-review">
                    <p>review</p>
                    <textarea readOnly ></textarea>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default CategoryInfo