'use client';
import '@/widgets/forms/styles/forms.css';
import { useRef, useState } from 'react';

const langs = [
    {
        lang: 'Русский',
        city: 'Россия',
        val: 'ru',
    },
    {
        lang: 'Английский',
        city: 'Соединенные штаты',
        val: 'en',
    },
    {
        lang: 'Турецкий',
        city: 'Турция',
        val: 'tur',
    },
];

const speeds = [
    {
        speed: 'Скорость: обычная',
        val: 'normal',
    },
    {
        speed: 'Скорость: 0.25',
        val: '0.25',
    },
    {
        speed: 'Скорость: 0.5',
        val: '0.5',
    },
];

const authors = [
    {
        author: 'John',
        lan: 'en',
    },
    {
        author: 'Tom',
        lan: 'en',
    },
    {
        author: 'Ahmet',
        lan: 'tur',
    },
    {
        author: 'Emel',
        lan: 'tur',
    },
    {
        author: 'Алена',
        lan: 'ru',
    },
    {
        author: 'Алиса',
        lan: 'ru',
    },
    {
        author: 'Dariya',
        lan: 'ru',
    },
    {
        author: 'Джейн',
        lan: 'ru',
    },
    {
        author: 'Dmitry',
        lan: 'ru',
    },
    {
        author: 'Захар',
        lan: 'ru',
    },
    {
        author: 'Коля',
        lan: 'ru',
    },
    {
        author: 'Оксана',
        lan: 'ru',
    },
    {
        author: 'Svetlana',
        lan: 'ru',
    },
    {
        author: 'Филипп',
        lan: 'ru',
    },
    {
        author: 'Эрмил',
        lan: 'ru',
    },
];

const typesMp = [
    {
        ntp: 'MP3',
        valu: 'mp3',
    },
    {
        ntp: 'WAV',
        valu: 'wav',
    },
];

const FormVoiceOver = ({ edte, editedaut }: any) => {
    const [langVal, setLangVal] = useState<string>('ru');

    const [voiceSpeed, setVoiceSpeed] = useState<string>('normal');

    //   const [author, setAuthor] = useState<string>("Алена");

    const [text, setText] = useState<string>('');

    const [typeMp, setTypeMp] = useState<string>('mp3');

    const [history, setHistory] = useState<string[]>([]);
    const [redoStack, setRedoStack] = useState<string[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: any) => {
        const at = authors.filter((c: any) => c.lan == e);
        edte(at[0].author);
    };

    const handleChangetext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHistory([...history, text]);
        setText(e.target.value);
        setRedoStack([]);
    };

    const handleUndo = () => {
        if (history.length > 0) {
            const lastState = history.pop();
            if (lastState !== undefined) {
                setRedoStack([text, ...redoStack]);
                setText(lastState);
                setHistory([...history]);
            }
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            const nextState = redoStack.shift();
            if (nextState !== undefined) {
                setHistory([...history, text]);
                setText(nextState);
                setRedoStack([...redoStack]);
            }
        }
    };

    const handlePause = () => {
        if (textareaRef.current) {
            const cursorPosition = textareaRef.current.selectionStart;
            const newText = text.slice(0, cursorPosition) + ' {pause} ' + text.slice(cursorPosition);

            setHistory([...history, text]);
            setText(newText);
            setRedoStack([]);

            // Maintain the cursor position after inserting {pause}
            setTimeout(() => {
                textareaRef.current!.selectionStart = cursorPosition + 7;
                textareaRef.current!.selectionEnd = cursorPosition + 7;
            }, 0);
        }
    };

    const handleAddPlus = () => {
        if (textareaRef.current) {
            const selectionStart = textareaRef.current.selectionStart;
            const selectionEnd = textareaRef.current.selectionEnd;
            const selectedText = text.slice(selectionStart, selectionEnd);

            if (selectedText.length === 1) {
                const newText = text.slice(0, selectionStart) + '+' + selectedText + text.slice(selectionEnd);

                setHistory([...history, text]);
                setText(newText);
                setRedoStack([]);

                setTimeout(() => {
                    textareaRef.current!.selectionStart = selectionEnd + 1;
                    textareaRef.current!.selectionEnd = selectionEnd + 1;
                    textareaRef.current!.focus();
                }, 0);
            } else {
                alert('Ударение должно быть только на одну букву!');
            }
        }
    };

    return (
        <form action="voiceover" className="form">
            <h1 className="form_title h1">Озвучка текста онлайн синтезированным голосом диктора</h1>
            <span className="form_subtitle">Нейросеть имитирует речь человека на разных языках</span>
            <div className="form_voiceover">
                <div className="form_voiceover__select-block">
                    <div className="form__area--row">
                        <div className="form_select__wrapper">
                            <select
                                name=""
                                id=""
                                value={langVal}
                                onChange={e => {
                                    setLangVal(e.target.value), handleChange(e.target.value);
                                }}
                            >
                                {langs.map((c: any, index: any) => (
                                    <option key={index} value={c.val} className="option--ru--en--tur">
                                        {c.lang} ({c.city})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form_select__wrapper">
                            <select name="" id="" value={editedaut} onChange={e => edte(e.target.value)}>
                                {authors.map((aut: any, inde: any) => (
                                    <option
                                        style={{ display: aut.lan !== langVal ? 'none' : 'block' }}
                                        key={inde}
                                        value={aut.author}
                                    >
                                        {aut.author}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form__area--row">
                        <div className="form_select__wrapper">
                            <select name="" id="" value={voiceSpeed} onChange={e => setVoiceSpeed(e.target.value)}>
                                {speeds.map((c: any, ind: any) => (
                                    <option key={ind} value={c.val}>
                                        {c.speed}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form_voiceover__text-area">
                    <div className="editor-els">
                        <div className="editor-els__element" onClick={handleUndo}>
                            <img src="/ico/svgBack.svg" alt="" />
                            <div className="tip">Назад</div>
                        </div>
                        <div className="editor-els__element" onClick={handleRedo}>
                            <img src="/ico/svgForward.svg" alt="" />
                            <div className="tip">Вперед</div>
                        </div>
                        <div className="editor-els__element " onClick={handlePause}>
                            <img src="/ico/svgPause.svg" alt="" />
                            <div className="tip">
                                Поставьте курсор в место где хотите сделать паузу, и нажмите эту кнопку
                            </div>
                            <span className="editor-els__element--text">Пауза</span>
                        </div>
                        <div className="editor-els__element" onClick={handleAddPlus}>
                            <img src="/ico/stb.png" alt="" />
                            <div className="tip">Назад</div>
                            <span className="editor-els__element--text">Ударение</span>
                        </div>
                    </div>
                    <div className="textarea-container">
                        <div className="close-block">
                            <div className="close-btn" hidden={!text} onClick={() => setText('')}>
                                <div className="describe" onClick={() => setText('')}>
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
                            ref={textareaRef}
                            rows={10}
                            value={text}
                            onChange={handleChangetext}
                        ></textarea>
                    </div>
                </div>
                <div className="form_voiceover__counter">
                    <div className="counter__wrapper">
                        <span>Количество символов: {text.length}</span>
                    </div>
                </div>
            </div>
            <div className="form_voiceover__synthesize">
                <div className="synthesize_button">
                    <button>Синтезировать речь</button>
                </div>
                <div className="synthesize_select">
                    <div className="synthesize_select__wrapper">
                        <select name="" id="" value={typeMp} onChange={e => setTypeMp(e.target.value)}>
                            {typesMp.map((nm: any, inde: any) => (
                                <option key={inde} value={nm.valu}>
                                    {nm.ntp}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </form>
    );
};

export { FormVoiceOver };
