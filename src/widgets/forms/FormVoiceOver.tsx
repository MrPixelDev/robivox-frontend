import '@/widgets/forms/styles/forms.css';

const langs = {};

const FormVoiceOver = () => {
    return (
        <form action="voiceover" className="form">
            <h1 className="form_title h1">Озвучка текста онлайн синтезированным голосом диктора</h1>
            <span className="form_subtitle">Нейросеть имитирует речь человека на разных языках</span>
            <div className="form_voiceover">
                <div className="form_voiceover__select-block">
                    <div className="form__area--row">
                        <div className="form_select__wrapper">
                            <select name="" id="">
                                <option value="ru" className="option--ru">
                                    Русский (Россия)
                                </option>
                                <option value="en" className="option--en">
                                    Английский (Соединенные штаты)
                                </option>
                                <option value="tur" className="option--tur">
                                    Турецкий (Турция)
                                </option>
                            </select>
                        </div>

                        <div className="form_select__wrapper">
                            <select name="" id="">
                                <option value="ru">Ahmet</option>
                                <option value="ru">Emel</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__area--row">
                        <div className="form_select__wrapper">
                            <select name="" id="">
                                <option value="ru">Скорость: обычная</option>
                                <option value="ru">Скорость: 0.25</option>
                                <option value="ru">Скорость: 0.5</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form_voiceover__text-area">
                    <div className="editor-els">
                        <div className="editor-els__element">
                            <img src="/ico/svgBack.svg" alt="" />
                            <div className="tip">Назад</div>
                        </div>
                        <div className="editor-els__element">
                            <img src="/ico/svgForward.svg" alt="" />
                            <div className="tip">Вперед</div>
                        </div>
                        <div className="editor-els__element ">
                            <img src="/ico/svgPause.svg" alt="" />
                            <div className="tip">
                                Поставьте курсор в место где хотите сделать паузу, и нажмите эту кнопку
                            </div>
                            <span className="editor-els__element--text">Пауза</span>
                        </div>
                        <div className="editor-els__element">
                            <img src="/ico/stb.png" alt="" />
                            <div className="tip">Назад</div>
                            <span className="editor-els__element--text">Ударение</span>
                        </div>
                    </div>
                    <div className="textarea-container">
                        <div className="close-block">
                            <div className="close-btn">
                                <div className="describe">
                                    Очистить<div className="triangle"></div>
                                </div>
                            </div>
                        </div>
                        <textarea
                            placeholder="Введите или скопируйте текст, который нужно озвучить и нажмите кнопку «синтезировать речь» под формой. 
Для использования сервиса без ограничений, необходимо зарегистрироваться."
                            name="text"
                            id="text"
                            cols={30}
                            rows={10}
                        ></textarea>
                    </div>
                </div>
                <div className="form_voiceover__counter">
                    <div className="counter__wrapper">
                        <span>Количество символов: </span>
                    </div>
                </div>
            </div>
            <div className="form_voiceover__synthesize">
                <div className="synthesize_button">
                    <button>Синтезировать речь</button>
                </div>
                <div className="synthesize_select">
                    <div className="synthesize_select__wrapper">
                        <select name="" id="">
                            <option value="mp3">MP3</option>
                            <option value="wav">WAV</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    );
};

export { FormVoiceOver };
