import './styling.scss';
import Res from '../../assets/GameRes/gameRes';
import { useEffect, useState } from 'react';

interface Case {
    letter: string;
    vCase?: string
    code: string,
    case: string,
    details: string,
    img: string,
}
export const MatchingGame = () => {


    const [CaseList, setCaseList] = useState<Array<Case>>(Res);
    const [newList, setNewList] = useState<Array<Case>>(Res);
    const [finish, setFinish] = useState(false)

    const [rightAnswersCount, setRightAnswersCount] = useState(0);


    const hdo = (Case: string, c: Case) => {
        setRightAnswersCount(0);
        newList.map((vc: Case) => {
            if (c.code === vc.code) {
                vc.vCase = Case;
                return { ...vc, vCase: Case };
            }
            setCaseList([...newList])
        })
        newList.forEach(c => {
            (c.case === c.vCase) ? setRightAnswersCount(rightAnswersCount + 1) : null;
        });
    }

    useEffect(() => {
        setCaseList([...newList])

    }, [newList]);

    return <div className='MatchingGame'>
        {!finish ? <>
            <section>
                <div className="lable lm20px">
                    Eclipse Cases
                </div>
                {newList ? <div className="casesWrap">
                    {CaseList.map((c: Case) => <>
                        <div className="caseBox">
                            <div id={c.letter} key={c.code}
                                className="letterDrop bm20px"
                                onDragOver={ev => ev.preventDefault()}
                                onDrop={ev => {
                                    ev.preventDefault();
                                    const Case = ev.dataTransfer.getData("case");

                                    hdo(Case, c);
                                }}>
                                {c.vCase || "Drop"}
                            </div>
                            <h4 className="bm20px">
                                {c.details}
                            </h4>
                        </div>
                    </>)}
                </div> : null}
            </section>
            <section>
                <div className="lable lm20px">
                    Visual Cases
                </div>
                <div className="wraper">
                    <h4 className="bm20px">
                        Match the given images by draging the letter boxes to the right Eclipse case.
                    </h4>
                    <div className="visualsWrap">
                        {CaseList.map((c: Case) => <>
                            <div className="visualBox" key={"v" + c.code}>
                                <img src={c.img} alt={c.case} />

                                <div className="dragHolder"
                                    draggable={true} onDragStart={ev => {
                                        ev.dataTransfer.setData("case", c.case);
                                    }}>
                                    <h4 className='bm20px'>{c.case}</h4>
                                </div>
                            </div>
                        </>)}
                    </div>
                </div>
            </section>

        </> : <>
            <section>
                <div className="lable lm20px">
                    Results
                </div>
                <div className="ResultsWrap wraper">
                    <h3 className="bm20px">Your Right Answers Is {rightAnswersCount} out of {newList.length}.</h3>
                    <button className="br14px">Try Again!</button>
                </div>
            </section>

        </>}
        <div className="btnWrap">

            {!finish ?
                <button className='bb18px' onClick={() => { setFinish(true) }}>Submit <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8335 13.3571L7.92874 22.5L10.1829 19.1393C15.5034 11.2069 23.3791 5.33493 32.5002 2.5V2.5" stroke="black" stroke-width="4" />
                </svg></button> 
                :
                <button className='bb18px' onClick={() => { setFinish(false); setNewList([...Res]); setCaseList([...Res]);}}>Restart</button>
            }
        </div>


    </div>
}
