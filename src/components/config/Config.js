import clsx from "clsx";
import { memo, useRef, useState } from "react";
import {
    Button,
    Col,
    FormGroup,
    FormLabel,
    FormText,
} from "react-bootstrap";
import { Gear } from "react-bootstrap-icons";
import FormRange from "react-bootstrap/esm/FormRange";
import { useOutsideClick } from "~/hooks/useOutsideClick";
import styles from "./Config.module.scss";

function Config({ handleSetBoard, handleResetBoard, rangeSize }) {
    console.log("config rerender");

    const [sizeText, setSizeText] = useState(`${rangeSize}x${rangeSize}`);
    const [showConfig, setShowConfig] = useState(false);

    const handleChangeSize = (value) => {
        handleSetBoard(value);
        setSizeText(`${value}x${value}`);
    };

    const containerRef = useRef();
    useOutsideClick(containerRef,()=>setShowConfig(false));

    return (
        <div className={styles.wrapper}>
            <Col className="text-center d-flex">
                <Button
                    variant="secondary"
                    className={clsx(styles["show-btn"], "btn-sm w-25")}
                    onClick={() => setShowConfig(!showConfig)}
                >
                    <Gear size={20} />
                </Button>
            </Col>
            {showConfig && (
                <div>
                    <Col ref={containerRef} className={clsx(styles.config)}>
                        <h4>Configuration</h4>
                        <FormGroup>
                            <FormLabel className="h5">Size:</FormLabel>
                            <FormText className="float-end h5 text-dark">
                                {sizeText}
                            </FormText>
                            <FormRange
                                step={1}
                                min={10}
                                max={20}
                                onChange={(e) =>
                                    handleChangeSize(e.target.value)
                                }
                                value={rangeSize}
                            />
                        </FormGroup>
                        <Col className="text-end">
                            <Button onClick={() => handleResetBoard()}>
                                Reset
                            </Button>
                        </Col>
                    </Col>
                </div>
            )}
        </div>
    );
}

export default memo(Config);
