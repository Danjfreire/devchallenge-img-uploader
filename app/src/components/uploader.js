import { Component } from 'react'

export class Uploader extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isUploading: true,
        }
    }

    render() {

        if (this.state.isUploading) {
            return (
                <div className="pageBody">
                    <div className="uploadProgress">
                        <h1>Uploading...</h1>
                        <div className="progressBar">
                        </div>
                    </div>
                </div>
            )
        }

        return <div className="pageBody">
            <div className="app">
                <h1 className="header">Upload your image</h1>

                <p className="">File should be Jpeg, Png...</p>

                <form className="uploader">
                    <div className="logo" onDrop=""></div>
                    <input type="file" id="fileElem" accept="image/*" />
                    <p>Drag & drop your image here</p>

                </form>
                <p className>Or</p>
                <label className="btn" htmlFor="fileElem">Choose a file</label>
            </div>
        </div>

    }
} 