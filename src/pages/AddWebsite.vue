<template>
    <div class="w-screen min-h-screen flex justify-center items-center flex-col">
        <div class="card w-96 bg-base-100 border-4 border-[#00000084] py-10 flex justify-center items-center flex-col">
        <h1 class="text-4xl font-black">Add Website</h1>


        <div class="form-control py-10">
            <div>
                <label class="label">
                <span class="label-text font-bold">Website Name</span>
            </label>
            <input type="text" placeholder="Website Name" class="input input-bordered w-full font-bold" v-model="websiteName"/>
            </div>

            <div class="mt-4">
                <label class="label">
                <span class="label-text font-bold">Website URL</span>
            </label>
            <input type="text" placeholder="Website URL" class="input input-bordered w-full font-bold" v-model="websiteURL"/>
            </div>

            <div class="mt-4">
                <label class="label">
                <span class="label-text font-bold">Developer</span>
            </label>
            <input type="text" placeholder="Developer" class="input input-bordered w-full font-bold" v-model="developer"/>
            </div>

            <div class="mt-4">
                <label class="label">
                <span class="label-text font-bold">Tags (seperate with commas)</span>
            </label>
            <input type="text" placeholder="Tags" class="input input-bordered w-full font-bold" v-model="tags"/>
            </div>

            <!-- image uploader -->
            <div class="mt-4">
                <label class="label">
                <span class="label-text font-bold">Image (1303 × 673 px reccommended)</span>
            </label>
            <input type="file" class="input input-bordered w-full font-bold" @change="onFileChange"  accept="image/*"/>
            </div>

            <div class="mt-4 flex justify-center items-center">
                <button class="btn btn-wide" @click="addWebsite">Add Website</button>
            </div>

            <div class="mt-4 text-center text-lg font-semibold">
                Don't be a chicken, add a real website!.
            </div>


            </div>
        </div>

        <div class="alert alert-error shadow-lg error-notify hidden">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Please check the form and try again!</span>
  </div>
</div>

<div class="alert alert-success shadow-lg success-notify hidden">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Website added successfully!</span>
  </div>
</div>

    </div>
</template>

<script>
export default {
    name: "AddWebsite",
    data() {
        return {
            websiteName: "",
            websiteURL: "",
            developer: "",
            tags: "",
            image: null,
        }
    },
    methods: {
        addWebsite() {
            if(this.validate()) {
                fetch(`${import.meta.env.VITE_API_URL}/addWebsite?name=${this.websiteName}&image=${this.image}&url=${this.websiteURL}&tags=${this.tags.split(' ').join('')}&dev=${this.developer}`)
            // check if the response is ok
            .then(response => {
                if (response.ok) {
                   response.json().then(data => {
                          this.showSuccessMessage();
                   })
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            }
            else {
                this.showErrorMessage();
            }

        },
        onFileChange(e) {
            const file = e.target.files[0];
            // upload to imgbb
            const formData = new FormData();
            formData.append("image", file);
            fetch("https://api.imgbb.com/1/upload?key=7bd86449005294d3a0855998be71846a", {
                method: "POST",
                body: formData
            })
            .then(res => res.json())
            .then(res => {
                this.image = res.data.url;
            })
        },
        validate() {
            if (this.websiteName == "" || this.websiteURL == "" || this.developer == "" || this.tags == "" || this.image == null) {
                return false;
            } else {
                return true;
            }
        },
        showErrorMessage() {
            document.querySelector(".error-notify").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".error-notify").classList.add("hidden");
            }, 3000);
        },
        showSuccessMessage() {
            document.querySelector(".success-notify").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".success-notify").classList.add("hidden");
            }, 3000);
        }
    }

}
</script>